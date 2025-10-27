import React, { useState } from 'react'

const ResetCounter = () => {
    const [count, setCount] = useState(0);

    const handleIncreament = () => {
        setCount(() => count + 1)
    }
    const handleDecreament = () => {
        setCount(() => count - 1)
    }
    const handleReset = ()=>{
        setCount(0);
    }
    return (
        <div className='flex flex-col  items-center justify-center'>
            <h3 className='text-2xl text-black my-4'>Counter App</h3>
            <div className='flex flex-col gap-6'>
                <div>
                    <h2 className='text-2xl'>{count}</h2>
                </div>
                <div className='flex gap-4'>
                <button onClick={handleDecreament} className='hover:scale-95 hover:duration-300 border rounded-lg bg-slate-800 text-white text-xl font-bold px-4 py-1 cursor-pointer hover:bg-black'>Decrease</button>
                <button onClick={handleReset} className='hover:scale-95 hover:duration-300 border rounded-lg bg-slate-800 text-white text-xl font-bold px-4 py-1 cursor-pointer hover:bg-black'>Reset</button>
                <button onClick={handleIncreament} className='hover:scale-95 hover:duration-300 border rounded-lg bg-slate-800 text-white text-xl font-bold px-4 py-1 cursor-pointer hover:bg-black'>Increase</button>

                </div>
            </div>
        </div>
    )
}

export default ResetCounter