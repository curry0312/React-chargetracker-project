import React, {useRef} from 'react'
import ControlRenderButtons from './ControlRenderButtons'
import MenuAddBudget from './MenuAddBudget'
import Each_charge from '../../component/Each_budget'
import { useBudget } from '../../contexts/BudgetContext'

export default function Main() {

  const {budgets} = useBudget()

  const addBudgetMenuRef = useRef()
  
  return (
    <>
    <div className='main'>
      <ControlRenderButtons addBudgetMenuRef={addBudgetMenuRef}/>

      {budgets.map(budget => 
        <Each_charge key={budget.id} budget={budget}/>
      )}
      
      <MenuAddBudget addBudgetMenuRef={addBudgetMenuRef} />
    </div>
    </>
  )
}
