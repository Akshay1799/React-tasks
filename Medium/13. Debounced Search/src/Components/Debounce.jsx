import React from 'react'
import { useState, useEffect } from 'react'

const Debounce = () => {
    const [query, setQuery] = useState('');

    useEffect(() => {
      const timer = setTimeout(() => {
        if (query !== '') {
            console.log(`User typed: ${query}`);    
        }
        
      }, 1000);
    
      return () => {
        clearTimeout(timer)
      }
    }, [query])
    
  return (
    <div className='flex flex-col justify-center gap-6'>
        <div>
            <input value={query} onChange={(e)=>setQuery(e.target.value)} type="text"  className='border rounded-lg px-4 py-2 shadow-xl'/>
        </div>
        {query && (<p>{`User typed: ${query}`}</p>)}
        
    </div>
  )
}

export default Debounce