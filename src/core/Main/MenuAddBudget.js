import React, {useRef} from 'react'
import MenuAddCategory from './MenuAddCategory'
import { useBudget } from '../../contexts/BudgetContext'

const MenuAddBudget = ({addBudgetMenuRef}) => {

  const {addBudget} = useBudget()

  const timeRef = useRef()
  const priceRef = useRef()
  const categoryRef = useRef()
  const noteRef = useRef()
  // const submitButtonRef = useRef()


  //When pressing submit button, invoke this
  function submitAddBudgetMenu() {
    const time = timeRef.current.value
    const price = parseFloat(priceRef.current.value) 
    const category = categoryRef.current.value
    const note = noteRef.current.value

    addBudget(time, price, category, note)
    
    timeRef.current.value = ""
    priceRef.current.value = ""
    categoryRef.current.textContent = ""
    noteRef.current.value = ""

    addBudgetMenuRef.current.style.transform = "scale(0)"
  }
  
  
  //When pressing cancel button, invoke this
  function cancelAddBudgetMenu() {
    addBudgetMenuRef.current.style.transform = "scale(0)"
  }

  return (
    <div ref={addBudgetMenuRef} className='addpart-bg'>
      <div className='addpart'>
        <div className='addpart-input'>
        <div className='each'>
            <label>Time</label>
            <input type='date' ref={timeRef} />
        </div>
        <div className='each'>
            <label>Price</label>
            <input type='number' ref={priceRef} />
        </div>
        <div className='each'>
            <label>Note</label>
            <input type='text' ref={noteRef} />
        </div>
          <MenuAddCategory ref={categoryRef}/>
        </div>

        <div className='addpart-button'>
          <button className='submit' onClick={()=>submitAddBudgetMenu()}>Submit</button>
          <button className='cancel' onClick={()=>cancelAddBudgetMenu()}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default MenuAddBudget
