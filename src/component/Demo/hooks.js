import React, { useState, useEffect } from 'react'
export default function Hooks() {
    const [counter, setCounter] = useState(0)
    const [inputText, setText] = useState("")
    const increment = () => {
        setText("")
    }
    useEffect(() => {  
        console.log("componentDidupdate")
    })
    useEffect(() => {
        console.log("componentDidupdate")
    }, [counter])
    useEffect(() => {
        
    }, [])
    useEffect(() => {
        return () => {
            console.log("component will unmount")
        }
    },
        []
    )
    return (
        <div>
            <button
                onClick={increment}
            >
                click
        </button>
            <input
                type="text"
                value={inputText}
                onChange={(event)=> setText(event.target.value)}
            >
            </input>
            <p>{counter}</p>
            <p>{inputText}</p>
        </div>
    )
}