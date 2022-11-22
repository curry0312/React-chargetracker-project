import React from 'react'
import { useCategory } from '../contexts/CategoryContext'

export default function Each_category({category, hideChooseCategoryMenu}) {

  const {showSetTarget_category} = useCategory()

  function handleChooseCategory(category) {
    showSetTarget_category(category)
    hideChooseCategoryMenu()
  }

  return (
    <button onClick={()=>{handleChooseCategory(category)}} className='each-category'>{category}</button>
  )
}
