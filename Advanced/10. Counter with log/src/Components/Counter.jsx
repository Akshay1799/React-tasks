import React from 'react'
import { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncreament = ()=>{
        setCount(count+1)
    }
    const handleDecreament = ()=>{
        setCount(count-1)
    }

    useEffect(() => {
    console.log(`Current count is: ${count}`);
    }, [count])
    
  return (
    <div>
        <h2 className='font-bold text-3xl mb-8'>Counter with log</h2>
    <div className='flex justify-center gap-4'>
        <button onClick={handleDecreament} className='bg-slate-700 border rounded-lg px-4 py-1 text-white font-semibold text-2xl hover:cursor-pointer hover:bg-black duration-200 ease-in-out'>-</button>
        <p className='text-2xl font-semibold'>{count}</p>
        <button onClick={handleIncreament} className='bg-slate-700 border rounded-lg px-4 py-1 text-white font-semibold text-2xl hover:cursor-pointer hover:bg-black duration-200 ease-in-out'>+</button>
    </div>
    </div>
  )
}

export default Counter