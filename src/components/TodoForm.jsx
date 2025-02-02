import React, { useState } from 'react'
import { useTodo } from '../contexts';

const TodoForm = () => {

    const [todo, settodo] = useState("");
    
    const {addTodo} = useTodo()
    const add = (e)=>{
       e.preventDefault();
       if(!todo) return ;
       
       addTodo({todo , completed : false})
       settodo("");
    }
    
     return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                onChange={(e) => settodo(e.target.value)}
                value={todo}
                className="w-full border text-black border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/30 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-blue-700 text-white shrink-0">
                Add
            </button>
        </form>
    );

}

export default TodoForm