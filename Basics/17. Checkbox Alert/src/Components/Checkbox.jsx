import React from 'react'
import { useState, useEffect } from 'react'

const Checkbox = () => {
    const [status, setStatus] = useState(false);

    const handleCheckbox = ()=>{
        setStatus((prev)=>!prev)
    }

    useEffect(() => {
        alert(status? `Current status is: Checked`:`Current status is: Unchecked`)
    }, [status])
    
  return (
    <div className='flex flex-col justify-center'>
        <p>{status? `Current status is: Checked`:`Current status is: Unchecked`}</p>
        <input onClick={handleCheckbox} type="checkbox" />
    </div>
  )
}

export default Checkbox