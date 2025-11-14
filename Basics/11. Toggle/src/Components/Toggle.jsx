import React from 'react'
import { useState, useEffect } from 'react'

const Toggle = () => {
const [toggle, setToggle] = useState(true);
const [title, setTitle] = useState(true)
    useEffect(() => {
        if (toggle) {
            setTitle("Visble")
        } else {
            setTitle("Hidden")
        }
    }, [toggle])

    const handleToggle = ()=>{
        setToggle(!toggle)
    }
    
  return (
    <div className='flex flex-col justify-center gap-4'>
        <h2><strong>Title: </strong>{title}</h2>
        {toggle && (<p><strong>Text: </strong>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>)}
        <button onClick={handleToggle} className='mx-auto 0 w-fit bg-slate-700 text-white font-semibold border rounded-lg py-1 px-4 hover:bg-black hover:cursor-pointer duration-300'>Click to Toggle</button>

    </div>
  )
}

export default Toggle