import React from 'react'
import TodoCard from './TodoCard'

// we are retrieving the props the App component, destructing here, so that we can have access to it
export default function TodoList(props) {
    const { todos } = props

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
            <TodoCard key={todoIndex}>
                <p>{todo}</p>
            </TodoCard>
        )
      })}
    </ul>
  )
}
