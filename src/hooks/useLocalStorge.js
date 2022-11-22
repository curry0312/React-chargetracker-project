import React, { useEffect, useState } from 'react'

export default function useLocalStorge(key, defaultValue) {

    const [value, setValue] = useState(()=>{
        const jsonValue = localStorage.getItem(key)
        if(jsonValue !== null) return JSON.parse(jsonValue)
        if(jsonValue === null) return defaultValue
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value])//When changing key's name, it doesn't effect anything

    return [value, setValue]
}
