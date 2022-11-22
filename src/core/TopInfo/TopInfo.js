import React, {} from 'react'
import { useBudget } from '../../contexts/BudgetContext'

export default function TopInfo() {

  const {expenses, spreadsheet} = useBudget()

  return (
    <div className='topInfo'>
        <div>Total Expense: ${expenses}</div>
        {Object.entries(spreadsheet).map(([key,value])=>{
         return <div key={key}>{`${key}:${value}`}</div>
        })}
    </div>
  )
}
