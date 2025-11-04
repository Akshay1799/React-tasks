import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: ''
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!data.name === '' || !data.email === '') return;
        setIsSubmitted(true);
        
    }
    return (
        <div>
            <div className='flex justify-center gap-4 my-4'>
                <div className='flex gap-4'>
                    <input className='pl-4 py-2 outline-none border border-gray-200 rounded-xl' type="text" placeholder='Enter your name' name='name' onChange={handleChange} />
                    <input className='pl-4 py-2 outline-none border border-gray-200 rounded-xl min-w-xs' type="email" placeholder='Enter your email' name='email' onChange={handleChange} />
                </div>
                <div>
                <button onClick={onSubmit} className='text-white bg-slate-700 hover:bg-black cursor-pointer px-3 py-2 rounded-xl duration-200 font-bold hover:scale-95'>Add</button>
                </div>
            </div>
            <div>
                {isSubmitted && (
                    <div>
                        <p><strong>Name:</strong> {data.name}</p>
                        <p><strong>Email:</strong>  {data.email}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Form