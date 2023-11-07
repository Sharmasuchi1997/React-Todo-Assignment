import { useState } from 'react'

import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [updatedTask, setupdatedTask]= useState([])

  const addTask=()=>{
    setTask(event.target.value)
    console.log(event.target.value)
  }

  const renderTask=()=>{
    const updatedRenderTask=[...updatedTask, task]
    setupdatedTask(updatedRenderTask)
  }

  const deleteTask=(element)=>{
    const filterTask=updatedTask.filter(Task=>Task!=element)
    setupdatedTask(filterTask)
    console.log(setupdatedTask)
  }



 return (
    <>
      <div className="app_style">
      <h2>TODO APP</h2>
       <input type="text" placeholder='Todo Title' onChange={addTask} />
       <button  className="button_style" onClick={renderTask}>Add Task</button >
      </div>
      <div className='task_style'>
      {
        updatedTask.map((eventTask)=>{
          return(
            <>
            <h2>{eventTask}
            <button className="button_style" onClick={()=>deleteTask(eventTask)}>Delete</button>
            <button className="button_style">Complete</button>
            </h2> 
           
            </>
          )
        })

      }
      </div>
     
      
    </>
  )
}

export default App
