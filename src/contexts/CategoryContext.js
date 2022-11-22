import React, { useContext, useState } from 'react'
import useLocalStorge from '../hooks/useLocalStorge'

const CategoryContext = React.createContext()

export function useCategory() {
    return useContext(CategoryContext)
}

const LOCAL_STORGE_KEY_categorys = "categorys"
/*----------------------------------------------*/
export default function CategoryProvider({children}) {
    const [categorys, setCategorys] = useLocalStorge(LOCAL_STORGE_KEY_categorys , [ 
        "早餐","中餐","晚餐","交通","娛樂"
    ])
    const [target_category, setTarget_category] = useState('') //set the value to category button

    function addCategory(inputRef) {
        const inputValue = inputRef.current.value
        setCategorys(currentCategorys => {
            return [...currentCategorys, inputValue]
        })
        inputRef.current.value = ""
    }

    function showSetTarget_category(category) {
        setTarget_category(category)
    }

    return (
        <CategoryContext.Provider value={{
            categorys,
            target_category,
            addCategory,
            showSetTarget_category,
        }}>
            {children}
        </CategoryContext.Provider>
    )
}
