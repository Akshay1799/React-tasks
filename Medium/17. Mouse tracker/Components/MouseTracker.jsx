import React from 'react'
import { useState } from 'react'

const MouseTracker = () => {
    const [position, setPosition] = useState({x:0, y:0});

    const handleMouseView = (e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.round(e.clientX -rect.left)
        const y = Math.round(e.clientY -rect.top)
        setPosition({x, y})
    }
  return (
    <div onMouseMove={handleMouseView} className='w-lg h-44 border shadow-xl flex justify-center items-center mx-auto 0 '>
            <div>
                <p>{`Mouse X: ${position.x}px`}</p>
                <p>{`Mouse Y: ${position.y}px`}</p>
            </div>
    </div>
  )
}

export default MouseTracker