import React, { useState } from 'react'

// we deconstructure the function and set it as a prop
// we create a state for the todo value i.e. the content of the todo
export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
  return (
    <header>
        {/* we assign the value as the todo value and look out for input changes
            we set the todo value as the content inside the input field
        */}
      <input value={todoValue} onChange={(e) => {
        setTodoValue(e.target.value)
      }} placeholder='Enter todo...' />
      {/* on click the new todo item is added to the list */}
      <button onClick={() => {
            handleAddTodos(todoValue)
            setTodoValue('')
        }}>Add</button>
    </header>
  )
}
