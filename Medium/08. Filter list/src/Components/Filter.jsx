import {useState } from 'react'
import '../../src/App.css'

function Filter() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState('');

  const handleTodos = ()=>{
    if(task.trim() === '') return;
    setTodos([...todos, task]);
    setTask('');
  }

  const filteredList = search.trim() === ''? todos : todos.filter((todo)=>todo.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className='flex gap-3 justify-center items-center flex-col'>
      <div className='flex justify-center gap-4' >
        <input className='border outline-none rounded-xl px-4' type="text" placeholder='add task...' value={task} onChange={(e)=>setTask(e.target.value)} />
        <button onClick={handleTodos} className='bg-blue-500 text-2xl px-4 py-2 rounded-xl hover:cursor-pointer'>+</button>
      </div>
      <div>
        {todos.length > 0 && (
            <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search task' className='border outline-none rounded-xl px-4'/>
        )}
      </div>
      <div>
        <ul >
          {todos.length>0 && (
            filteredList.map((item, index)=>(
              <li key={index} className='border my-2 px-4'>{item}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default Filter
