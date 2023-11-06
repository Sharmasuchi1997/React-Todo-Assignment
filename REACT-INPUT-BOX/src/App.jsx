import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  const [text, setText] = useState("")
  const [value, setValue]=useState([])

const addText=()=>{
  setText(event.target.value)
}

const addValue=()=>{
  const valueRender=[...value, text]
  setValue(valueRender)
}

const deleteValue=(removeText)=>{
    const valueRemove=value.filter(Text=>Text!==removeText)
    setValue(valueRemove)
    console.log(deleteValue)
}
  return (
    <>
      <div>
       <h1>Input Box</h1>
       <input type="text" onChange={addText}/>
       <button onClick={addValue}>Add</button>
       
   
      </div>
      {
        value.map((event)=>{
          return(
            <>
            <h2>{event} 
            <button onClick={()=>deleteValue(event)}>Delete</button>
             </h2>

            
          
            </>
          )
        })
      }
     
    </>
  )
}

export default App
