import { useEffect, useState } from 'react'

import './App.css'
import { TodoProvider } from './contexts';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {

  const [todos, settodos] = useState([]);
   
  const addTodo = (todo)=>{
    settodos((prev) => [ {id : Date.now() , ...todo}, ...prev])
  }
  
   const updateTodo = (id , todo)=>{
    settodos((prev) => prev.map((prevTodo ) => (prevTodo.id === id ?  todo : prevTodo )))
   }

   const deleteTodo = (id)=>{
    settodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
   }

   const toogleTodo = (id)=>{
    settodos((prev) => prev.map((prevTodo) => 
      (prevTodo.id === id ? {...prevTodo , completed : !prevTodo.completed} : prevTodo)))
   }
   
   useEffect(()=>{ 
     const todos =  JSON.parse(localStorage.getItem("todos"))
     if(todos && todos.length > 0){
     settodos(todos);
     }

   }, [])

   useEffect(()=>{
    localStorage.setItem("todos" , JSON.stringify(todos))
   },[todos])
  return (
  <TodoProvider value={{addTodo , updateTodo , todos , toogleTodo , deleteTodo}}>
    <div className="bg-[#d3f7f2] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 text-black mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo) =>(
                <div className='w-full' key={todo.id}>
                  <TodoItem todo={todo}/>
                </div>
              ))
            }
        </div>
    </div>
</div>
</TodoProvider>
  )
}

export default App
