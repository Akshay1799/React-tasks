import React, { useEffect } from 'react'
import { useState } from 'react'

const InputSync = () => {
 const [text, setText] = useState('');

  const handleInput = ()=>{
    if(inputText.trim() === '')return;
    setInputText(inputText)
  }

  useEffect(() => {
    const saved = localStorage.getItem("myInput")
    if(saved){
        setText(saved)
    }
    
  }, [])
  
  useEffect(() => { 
    localStorage.setItem("myInput", text) 
  }, [text])
  
  
  return (
    <div>
        <div className=' my-6'>
            <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder='Type here...'
            className='outline-none border border-blue-200 rounded-lg py-2 px-4 focus:border-black'
            />
        </div>
        <p><strong>You typed: </strong>{text}</p> 
    </div>
  )
}

export default InputSync