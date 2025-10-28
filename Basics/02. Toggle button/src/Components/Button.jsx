import React from 'react'
import { useState } from 'react'

const Button = () => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = ()=>{
        if(toggle){
            setToggle(!toggle)
        }
        setToggle(!toggle)
    }
  return (
    <div className='flex justify-center items-center flex-col'>
        <h1 className='text-black text-3xl'>Toggle Button</h1>
        <div className=' mt-4'>
            <button onClick={handleToggle} className='cursor-pointer hover:bg-gray-100 duration-200 hover:scale-95 border rounded-lg py-2 px-4 my-4'>{toggle? 'OFF': 'ON'}</button>
            {/* {toggle && (
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, praesentium.</p>
                )
            } */}
        </div>
    </div>
  )
}

export default Button