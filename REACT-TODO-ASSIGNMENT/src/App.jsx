import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {
  const [task, setTask] = React.useState("")
  const [todo, setTodo] =React.useState([])
 
  const handleClick=(event)=>{
    setTask(event.target.value)
    console.log(event.target.value)
  }

  const listOfTodo=()=>{
    const updatedtask=[...todo, task]
    setTodo(updatedtask)
    
  }
  // console.log(updatedtask)

  return (
    <>
      <div>
      <h1>TO DO LIST</h1>
        <input type="text" placeholder='Task name' onChange={handleClick} value={task}/>
        <button onClick={listOfTodo}>Add Task</button>
    {
      todo.map((taskName)=>{
        return(
          <ul>
          {taskName}
          </ul>
        )
        })
    }

      </div>
       
        </>
  
     ) } 
      
export default App
