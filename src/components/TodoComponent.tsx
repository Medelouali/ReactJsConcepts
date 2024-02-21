import React from 'react'
import { Todo } from '../types/TodosTypes'
import "./todo.css";

const TodoComponent: React.FC<{ todo: Todo, cb: ()=>void }>=(props)=> {
  return (
    <div className={"todo"+(props.todo.isBookmarked ? " todo__marked": "")}>
        <h4>{props.todo.title}</h4>
        <div className="description">
          {props.todo.description}
        </div>
        <span className="todo__date">{props.todo.date?.toLocaleTimeString()}</span>
        <div className='todo__id'>{props.todo.id}</div>
        <button onClick={props.cb}>{props.todo.isBookmarked ? "Unbookmark":"Bookmark"}</button>
    </div>
  )
}

export default TodoComponent
