import React, {useContext, useState} from 'react'
import useLocalStorge from '../hooks/useLocalStorge'

const BudgetContext = React.createContext()

//When We want to use state above, import useBudget() in other field
export function useBudget() {
    return useContext(BudgetContext)
}

const LOCAL_STORGE_KEY_state = 'budgets'

/*------------------------------------------------------*/
export default function BudgetProvider({children}) {
    const [budgets, setBudgets] = useLocalStorge(LOCAL_STORGE_KEY_state,[])
    const [expenses, setExpenses] = useState(0) 
    const [spreadsheet, setSpreadsheet] = useState([])

    function addBudget(time, price, category, note) {
        setBudgets(prevBudget => {
            return [...prevBudget,{
              time: time,
              price: price,
              category: category,
              note: note,
              id: new Date().getTime(),
              deletable: false
            }]
          }
        )
    }

    function deleteBudget() {
        const filteredBudgets = budgets.filter( budget => budget.deletable === false )
        setBudgets((current)=> current = filteredBudgets)
    }

    function addExpense() {
        if(budgets.length === 0) setExpenses(prevExpense => prevExpense = 0)
        if(budgets.length !== 0) {
            const prices = budgets.map(budget => budget.price)
            const totalExpense = prices.reduce((total, price) => total = total + price)
            setExpenses(totalExpense)
        }
    }

    function upadteBudgetDeletable(id, boolean) {
        setBudgets(prevBudget => {
            return prevBudget.map((eachPrevBudget)=>{
            if(eachPrevBudget.id === id){
                return {...eachPrevBudget, deletable: boolean}
            }
            else{
                return eachPrevBudget
            }
            })
        })
    }

    function updateSpreadSheet() {
        if(budgets.length === 0) setSpreadsheet([])

        const sets = budgets.map(budget =>{
        return {
            'category':budget.category,
            'price': budget.price
        }
        })
        const spreadsheetObj = {}
        sets.map((set)=>{
        set.category in spreadsheetObj ? 
        spreadsheetObj[set.category] = spreadsheetObj[set.category] + set.price
        : 
        spreadsheetObj[set.category] = set.price 
        })
        setSpreadsheet(spreadsheetObj)
    }

    return (
        <BudgetContext.Provider value={{
            budgets,
            expenses,
            spreadsheet,
            addBudget,
            deleteBudget,
            addExpense,
            updateSpreadSheet,
            upadteBudgetDeletable
        }}
        >
            {children}
        </BudgetContext.Provider>
    )
}
