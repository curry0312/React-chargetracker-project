import React, {} from 'react'
import { useBudget } from '../contexts/BudgetContext'

const Each_budget = ({budget}) => {
  
  const {upadteBudgetDeletable} = useBudget()

  //When pressing checkbox, invoke this
  function pressCheckbox(target_checkbox) {
    const target = target_checkbox.target.classList
    if(target.contains('white')) {
      target.remove('white')
      target.add('red')
      upadteBudgetDeletable(budget.id, true)
    } 
    else if(target.contains('red')) {
      target.remove('red')
      target.add('white')
      upadteBudgetDeletable(budget.id, false)
    } 
    else {
      return
    } 
  }

  return (
    <div className='eachState'>
      <div>{budget.time}</div>
      <div>{budget.category}</div>
      <div>{budget.note}</div>
      <div>${budget.price}</div>
      <div className='checkbox white disappear'  onClick={(e)=>pressCheckbox(e)}></div>
    </div>
  )
}

export default Each_budget