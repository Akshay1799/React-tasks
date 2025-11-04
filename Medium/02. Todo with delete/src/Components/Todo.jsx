import { useState } from 'react'
import '../../src/App.css'

function Todo() {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])

  const handleTodos = () => {
    if (task.trim() === '') return;
    setTodos([...todos, task]);
    setTask('');
  }

  const handleDelete = (index) => {
    const newList = todos.filter((_, i) => i !== index);
    setTodos(newList);
  }

  return (
    <div className='flex gap-3 justify-center items-center flex-col'>
      <div className='flex gap-3 justify-center ' >
        <input className='border rounded-xl px-4' type="text" placeholder='add task...' value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={handleTodos} className='bg-blue-500 hover:bg-blue-600 text-white font-semibold text-2xl px-4 py-2 rounded-xl hover:cursor-pointer'>+</button>
      </div>
      <div>
        <ul>
          {todos.length > 0 && (
            todos.map((item, index) => (
              <div className='flex justify-between my-2' key={index}>
                <li className='py-1 px-4 font-semibold'>{item}</li>
                <button onClick={() => handleDelete(index)} className='border border-grey-200 py-0 px-2 bg-red-500 hover:bg-red-600 hover:cursor-pointer rounded-lg'>delete</button>
              </div>
            ))
          )}
      </ul>
    </div>
    </div >
  )
}

export default Todo