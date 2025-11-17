import React from 'react'
import { useState,useEffect } from 'react'

const ResetCounter = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = ()=>{
        setCounter(prev => prev+1)
    }
    useEffect(() => {
      const timer = setTimeout(() => {
            setCounter(0)
      }, 5000);
    
      return () => {
        clearTimeout(timer)
      }
    }, [counter])
    
  return (
    <div>
        <p className='text-2xl'>{counter}</p>
        <button onClick={handleClick} className='flex justify-center mx-auto 0 bg-slate-700 border border-transparent rounded-lg px-4 py-2 hover:bg-black hover:cursor-pointer text-white font-semibold'>Click</button>
    </div>
  )
}

export default ResetCounter