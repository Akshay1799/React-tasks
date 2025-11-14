import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
      const counter = setInterval(() => {
        setTimer(prev => prev+1)
      }, 1000);
    
      return () => {
        clearInterval(counter)
      }
    }, [])
    
  return (
    <div><strong>Timer: </strong>{timer}</div>
  )
}

export default Timer