

import React, { useState } from 'react'
import TodoComponent from '../components/TodoComponent'
import { Todo } from '../types/TodosTypes';
import { v4 as uuidv4 } from 'uuid';
import "./main.css";

const Main = () => {
    const [todos, setTodos]=useState<Todo[]>([]);
    const [description, setDescription]=useState("");

    const addTodo=()=>{
        if(!description.trim())return;
        const newTodo: Todo={ description, date: new Date(), isBookmarked: false, id: uuidv4() };
        setTodos(prev=>[ ...prev, newTodo ]);
        setDescription(_=>"");
    }

    const handleInput=(e:React.ChangeEvent<HTMLInputElement>)=>setDescription(_=>e.target.value);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        addTodo(); 
    }

    const handleBookmarking=(id: string)=>{
        return ()=>{
            const index=todos.findIndex((item: Todo)=>item.id===id);
            if(index<0)return;
            const todo=todos[index];
            todo.isBookmarked=!todo.isBookmarked;
            setTodos(_=>([ todo ].concat(_.filter((item: Todo)=>item.id!==id))));
        }
    }

    return (
        <form className="todos" onSubmit={handleSubmit}>
            <input type="text" value={description} onChange={handleInput}/>
            <button type='submit'>Add ToDo</button>
            {todos.map((t)=><TodoComponent key={uuidv4()} todo={t} cb={handleBookmarking(t.id)}/>)}
        </form>
    )
}

export default Main