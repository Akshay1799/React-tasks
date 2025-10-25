import React from 'react'
import { useState } from 'react'

const Input = () => {
    const [input, setInput] = useState('')

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    return (
        <div className=' flex gap-2 justify-center items-center flex-col'>
            <h1 className='font-bold text-3xl my-4'>Input filed with real time data</h1>
            <div className='flex gap-2 justify-center items-center my-4'>
                <input type=" text" placeholder='Type here...' value={input} onChange={handleInput} className=' outline-gray-50 focus:outline-gray-200 px-4 py-2 rounded-3xl bg-gray-100 focus:bg-white' />
            </div>

            <div>
                {input.length > 0 && (<p>you typed: {input}</p>)}
                
            </div>
        </div>

    )
}

export default Input