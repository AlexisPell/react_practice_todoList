import React from 'react'
import './TodoList.sass'
import TodoListItem from './../TodoListItem/TodoListItem'


const TodoList = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {

  const elements = todos.map((item, key) => {
    const {id, ...itemProps} = item
    return (
        <li key={id} className="list-group-item">
          <TodoListItem 
            {...itemProps} 
            onDeleted={() => onDeleted(id)}
            onToggleDone={() => onToggleDone(id)}
            onToggleImportant={() => onToggleImportant(id)}
          />
        </li>
      )
    }
  )

  return (
    <ul className="TodoList list-group">
      {elements}
    </ul>
  )
}

export default TodoList
