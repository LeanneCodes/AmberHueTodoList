import React from 'react'

// we want to pass the p tag as the props from the TodoList
export default function TodoCard(props) {
    const { children } = props

    return (
            <li className='todoItem'>
                {/* display the todos within the same list item as the edit and trash icon */}
                {children}
                <div className="actionsContainer">
                    <i className="fa-solid fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash"></i>
                </div>
            </li>
    )
}
