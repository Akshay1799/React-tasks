import React from 'react'
import { useState, useEffect } from 'react'

const BgChanger = () => {
    const [color, setColor] = useState(null);

    const colours = ['red', 'blue', 'green', 'pink', 'black'];
    
    const handleBgColor = ()=>{
        const randomIndex = Math.floor(Math.random() *colours.length)
        const randomColor = colours[randomIndex];
        setColor(randomColor);
    }
    useEffect(() => {
        console.log(`Current colour: ${color}`);
    }, [color])
    
  return (
    <div className='flex flex-col gap-6 '>
        <div className='w-xl h-34 border shadow-xl  mx-auto 0'
        style={{backgroundColor: color}}
        ></div>
        <button onClick={handleBgColor} className='w-fit mx-auto 0 bg-slate-700 text-white font-semibold px-4 py-2 hover:bg-black duration-200 hover:cursor-pointer border-transparent rounded-lg '>Change color</button>
    </div>
  )
}

export default BgChanger