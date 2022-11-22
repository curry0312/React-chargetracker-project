import React, {useRef} from 'react'
import {useBudget} from '../../contexts/BudgetContext'

export default function ControlRenderButtons({addBudgetMenuRef}) {

    const {deleteBudget} = useBudget()

    const AddButtonRef = useRef()
    const DeleteButtonRef = useRef()
    const EditButtonRef = useRef()
    const FinishButtonRef = useRef()
    
    //When pressing Add button, invoke this
    function pressAddButton() {
        addBudgetMenuRef.current.style.transform = "scale(1)"
    }

    //When pressing Edit button, invoke this
    function pressEditButton() {
        const AllCheckboxButton = document.querySelectorAll('.checkbox')
        AllCheckboxButton.forEach((e)=> {
        CheckboxToggle(e)
        })
        ButtonToggle(AddButtonRef, DeleteButtonRef)
        ButtonToggle(EditButtonRef, FinishButtonRef)
    }

    //When pressing Delete button, invoke this
    function pressDeleteButton() {
        deleteBudget()
    }

    //When pressing Finish button, invoke this
    function pressFinishButton() {
        const AllCheckboxButton = document.querySelectorAll('.checkbox')
        AllCheckboxButton.forEach((e)=> {
        CheckboxToggle(e)
        })
        ButtonToggle(AddButtonRef, DeleteButtonRef)
        ButtonToggle(EditButtonRef, FinishButtonRef)
    }

    function CheckboxToggle(target) {
        target.classList.toggle('disappear')
    }
    function ButtonToggle(button1, button2) {
        button1.current.classList.toggle('disappear')
        button2.current.classList.toggle('disappear')
    }


    return (
        <div className='main-top'>
            <h1>Transactions</h1>
            <button onClick={()=>pressAddButton()} className='add-button' ref={AddButtonRef}>Add</button>
            <button onClick={()=>pressDeleteButton()} className='add-button disappear' ref={DeleteButtonRef}>Delete</button>
            <button onClick={()=>pressEditButton()} className='edit-button' ref={EditButtonRef}>Edit</button>
            <button onClick={()=>pressFinishButton()} className='edit-button disappear' ref={FinishButtonRef}>Finish</button>
        </div>
    )
}
