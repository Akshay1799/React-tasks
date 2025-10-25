import React from 'react'
import { useState } from 'react'

const ToggleText = () => {
    const [text, setText] = useState(false);

    const handleText = ()=>{
        if (text) {
            setText(!text)
        }
        setText(!text)
    }
  return (
    <div className='flex flex-col gap-6'>
        <div>
        <button onClick={handleText}>{text?'Hide Text': 'Show Text'}</button>
        </div>
        {
            text && (<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, obcaecati!</p>)
        }
    </div>
  )
}

export default ToggleText