import React from 'react'
import { useState, useEffect } from 'react'

const Counter = () => {
    const [title, setTitle] = useState('');

    useEffect(() => {
            document.title = `${title}`;
            console.log(title);
        
    }, [title])
    
  return (
    <div>
        <input onChange={(e) => setTitle(e.target.value)} type="number" placeholder='Type here...' className='border shadow-xl px-4 py-2 ' />
    </div>
  )
}

export default Counter