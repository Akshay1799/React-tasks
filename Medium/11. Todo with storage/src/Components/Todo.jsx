import React from 'react'
import { useState, useEffect } from 'react'

const Todo = () => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState(() => {
        try {
            const saved = JSON.parse(localStorage.getItem("todos"));
            return Array.isArray(saved)?saved:[];
        } catch  {
            return [];
        }
    });

    
    useEffect(() => {
        try {
            localStorage.setItem("todos", JSON.stringify(todos))  
        } catch {}
    }, [todos])
    
    const handleTodos = ()=>{
        if(text.trim()==='')return;
        setTodos(prev =>[...prev, text]);
        setText("");
    }
  return (
    <div className='flex flex-col justify-center gap-6'>
        <div className='flex justify-center gap-2'>
            <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder='Add tasks' className='rounded-lg border px-4 py-2 shadow-xl'/>
            <button onClick={handleTodos} className='bg-black hover:cursor-pointer border border-transparent rounded-lg px-4 py-1 text-white font-semibold'>Add</button>
        </div>
        <div>
            <ul>
                {todos.length > 0 && (
                    todos.map((item, index)=>(
                        <li key={index}>{item}</li>
                    ))
                )}
            </ul>
        </div>
    </div>
  )
}

export default Todo