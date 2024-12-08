import React from 'react'

// we want to pass the p tag (children) as the props from the TodoList
// we also need access to the edit and delete functions so that we can add them to our icons
export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props

    return (
            <li className='todoItem'>
                {/* display the todos within the same list item as the edit and trash icon */}
                {children}
                <div className="actionsContainer">
                    <button onClick={() => {handleEditTodo(index)}}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button onClick={() => {handleDeleteTodo(index)}}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </li>
    )
}
