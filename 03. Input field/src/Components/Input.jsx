import React from 'react'
import { useState } from 'react'

const Input = () => {
    const [input, setInput] = useState('')
    const [item, setItem] = useState([]);

     const handleInput = ()=>{
        if(input.trim() === '') return;
        setItem([...item, input])
        setInput('')
     }
  return (
    <div className=' flex gap-2 justify-center items-center flex-col'>
        <h1 className='font-bold text-3xl my-4'>Input filed with real time data</h1>
        <div className='flex gap-2 justify-center items-center my-4'>
        <input type=" text" placeholder='Type here...' value={input} onChange={(e)=>setInput(e.target.value)} className=' outline-gray-50 focus:outline-gray-200 px-4 py-2 rounded-3xl bg-gray-100 focus:bg-white'/>
        <button onClick={handleInput} className='px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold text-[14px] hover:cursor-pointer hover:bg-blue-600 duration-200 scale-105'>Add</button>

        </div>

        {item.length > 0 && (
            item.map((list, index)=>(
                <div>
                    <li key={index} className='text-black'>{list}</li>
                </div>
               
            ))
        )}
    </div>
    
  )
}

export default Input