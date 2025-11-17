import React from 'react'
import { useState, useEffect } from 'react'

const DynamicApi = () => {
    const [data, setData] = useState('');
    const [id, setId] = useState('');

    const fetchData = async (id)=>{
        if(id < 0 || id > 10 || id === '') return console.log(`User not found`);
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json();
        console.log(data);
        
        setData(data);
    }

    useEffect(() => {
        fetchData(id);
    }, [id])
    
  return (
    <div>
        <input value={id} onChange={(e)=>setId(Number(e.target.value))} type="text" className='rounded-lg border px-4 py-2 shadow-xl'/>
        <div className='flex flex-col justify-center gap-2 mt-6'>
            {data.id > 0 && (
                <>
                    <p><strong>Name: </strong>{data.name}</p>
                    <p><strong>Email: </strong>{data.email}</p>
                </>

            )}
        </div>
    </div>
  )
}

export default DynamicApi