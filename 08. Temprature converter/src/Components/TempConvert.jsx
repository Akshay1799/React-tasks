import React from 'react'
import { useState } from 'react'

const TempConvert = () => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value)
  }

    const fahrenheit = (()=>{
        const num = parseFloat(input);
        if(input === '' || Number.isNaN(input)) return '';
        return ((num * 9)/5 + 32).toFixed(2);
    })()
  return (
    <div>
        <h1 className='text-2xl font-bold my-4'>Convert your temprature in Fahrenheit</h1>
        <div>
            <input type='number' placeholder='Enter temprature in °C' value={input} onChange={handleChange} className='pl-4 border rounded-xl py-2 mb-4'/>
        </div>
        <div>
            {fahrenheit !== '' && (
                <p className='text-xl'>Temprature in fahrenheit {fahrenheit}°F</p>
            )}
        </div>
    </div>

  )
}

export default TempConvert