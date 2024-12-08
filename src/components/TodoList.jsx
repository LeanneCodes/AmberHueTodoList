import React from 'react'
import TodoCard from './TodoCard'

// we are retrieving the props the App component, destructing here, so that we can have access to it
export default function TodoList(props) {
    const { todos } = props

  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
            // the spread operator allows us to have access to all of the props from our parent
            <TodoCard {...props} key={todoIndex} index={todoIndex}>
                <p>{todo}</p>
            </TodoCard>
        )
      })}
    </ul>
  )
}
