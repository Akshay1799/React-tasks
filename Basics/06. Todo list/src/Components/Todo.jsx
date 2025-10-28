import {useState } from 'react'
import '../../src/App.css'

function Todo() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  const handleTodos = ()=>{
    if(task.trim() === '') return;
    setTodos([...todos, task]);
    setTask('');
  }

  return (
    <div className='flex gap-3 justify-center items-center flex-col'>
      <div className='flex gap-3 justify-center ' >
        <input className='border rounded-xl px-4' type="text" placeholder='add task...' value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={handleTodos} className='bg-blue-500 text-2xl px-4 py-2 rounded-xl hover:cursor-pointer'>+</button>
      </div>
      <div>
        <ul >
          {todos.length>0 && (
            todos.map((item, index)=>(
              <li key={index} className='border my-2 px-4'>{item}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default Todo
