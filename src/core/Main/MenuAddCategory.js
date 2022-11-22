import React,{useRef, forwardRef} from 'react'
import Each_category from '../../component/Each_category'
import { useCategory } from '../../contexts/CategoryContext'

const MenuAddCategory = forwardRef(({},ref)=> {

    const {categorys, target_category, addCategory} = useCategory()
    
    const chooseCategory_menuRef = useRef()
    const addCategory_menuRef = useRef()
    const addCategory_inputRef = useRef()


    //toggle function
    function showChooseCategoryMenu() {
        chooseCategory_menuRef.current.classList.toggle('drop-up', true)
        chooseCategory_menuRef.current.classList.toggle('drop-down', false)
    }
    function hideChooseCategoryMenu() {
        chooseCategory_menuRef.current.classList.toggle('drop-down', true)
        chooseCategory_menuRef.current.classList.toggle('drop-up', false)
    }
    function showAddCategoryMenu() {
        addCategory_menuRef.current.classList.toggle('drop-up', true)
        addCategory_menuRef.current.classList.toggle('drop-down', false)
    }
    function hideAddCategoryMenu() {
        addCategory_menuRef.current.classList.toggle('drop-down', true)
        addCategory_menuRef.current.classList.toggle('drop-up', false)
    }

    //Event function
    function pressChooseCategoryButton() {
        showChooseCategoryMenu()
    }
    function pressAddCategoryButton() {
        showAddCategoryMenu()
    }
    function pressConfirmButton() {
        addCategory(addCategory_inputRef)
        hideAddCategoryMenu()
    }

    return (
        <>
        <div className='category-section'>
            <div className='choose-category-main'>
                <label>Category</label>
                <input type="button" 
                className='choose-category-button'
                value={target_category} 
                ref={ref} 
                onClick={()=>{pressChooseCategoryButton()}}
                />
            </div>

            {/*default: drop-down */}
            <div ref={chooseCategory_menuRef} className="choose_category_menu drop-down">
                {categorys.map(category => {
                    return <Each_category 
                    category={category} 
                    key={category}
                    hideChooseCategoryMenu={hideChooseCategoryMenu}
                    />
                })}

                <input 
                type="button" 
                className='add-category-button' 
                value="Add"
                onClick={()=>{pressAddCategoryButton()}}
                />
            </div>

            {/*default: drop-down */}
            <div ref={addCategory_menuRef} className='add_category_menu drop-down'>
                <label>New Category:</label>
                <input type="text" ref={addCategory_inputRef}/>
                <input type="button" value="Confirm" onClick={()=>{pressConfirmButton()}}/>
            </div>
        </div>
        </>
    )
})

export default MenuAddCategory

