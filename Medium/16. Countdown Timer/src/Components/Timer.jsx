import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(60);
    const [isRunning, setIsRunning] = useState(false)

    const handleTimer = ()=>{
        setIsRunning(true);
    }
    const resetTimer = ()=>{
        setTimer(60);
        setIsRunning(true)

    }

    useEffect(() => {
      if (isRunning === true) {
        const counter = setInterval(() => {
            setTimer((prev) =>{ 
                if(prev === 0)return 0;
                return prev - 1;
            });               
        }, 1000);

        return () => clearInterval(counter);
      }
    }, [ isRunning])
    

  return (
    <div>
        <p>{`Current Timer: ${timer}`}</p>
        <div className='flex justify-center gap-2'>
            <button onClick={handleTimer} className='text-white font-semibold bg-slate-700 hover:bg-black hover:cursor-pointer px-4 py-2 border border-transparent rounded-lg'>Start</button>
            <button onClick={resetTimer} className='text-white font-semibold bg-slate-700 hover:bg-black hover:cursor-pointer px-4 py-2 border border-transparent rounded-lg'>Reset</button>

        </div>
    </div>
  )
}

export default Timer