import React from 'react'
import { useState, useEffect } from 'react'

const Tracker = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = ()=>{
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  
  return (
    <div className='flex flex-col justify-center items-center gap-6'>
      <h2 className='my-4 font-bold text-2xl'>Window size tracker</h2>
      <p>Currrent width: {width}px</p>
    </div>
  )
}

export default Tracker