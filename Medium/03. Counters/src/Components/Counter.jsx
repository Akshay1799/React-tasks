import { useState } from 'react'
import '../../src/App.css'

function Counter() {
  const [counters, setCounters] = useState([])

  const addCounter = ()=>{
    setCounters([...counters, 0])
  }

  const handleIncreament = (index)=>{
    const newCounter = [...counters];
    newCounter[index]++;
    setCounters(newCounter)
  }

  const handleDecreament = (index)=>{
    const newCounter = [...counters];
    newCounter[index]--;
    setCounters(newCounter)
  }

  return (
    <div className='flex gap-3 justify-center items-center flex-col'>
      <div className='flex gap-3 justify-center ' >
        <button onClick={addCounter} className='bg-blue-500 hover:bg-blue-600 text-white font-semibold text-2xl px-4 py-2 rounded-xl hover:cursor-pointer'>Add Counter</button>
      </div>
      <div>
        <ul>
          {counters.length > 0 && (
            counters.map((count, index) => (
              
                <li key={index} className='border rounded-lg flex gap-4 px-4 py-2 my-2'>
                  <button onClick={()=>handleDecreament(index)} className='font-semibold text-lg bg-grey-200 px-2  border rounded-xl hover:cursor-pointer hover:bg-gray-100'>-</button>
                  <p>{count}</p>
                  <button onClick={()=>handleIncreament(index)}  className='font-semibold text-lg bg-grey-200 px-2  border rounded-xl hover:cursor-pointer hover:bg-gray-100'>+</button>
                </li>
             
            ))
          )}
        </ul>
      </div>
    </div >
  )
}

export default Counter;