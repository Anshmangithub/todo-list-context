import { createContext, useContext } from "react";

export const  TodoContext = createContext({
    todos : [
        {
            id : 1, 
            todo : "todo mgs",
            completed : false
        }
    ],
     addTodo : ()=>{},
     updateTodo : ()=>{},
     deleteTodo : ()=>{},
     toogleTodo : ()=>{}
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = () =>{
    return useContext(TodoContext);
}