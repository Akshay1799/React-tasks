import React from 'react'
import { useState, useEffect } from 'react'

const Theme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = JSON.parse(localStorage.getItem("theme"))
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme))
  }, [theme])

  const handleTheme = () => {
    setTheme(prev => (prev ==='light'?'dark':'light'));
  }

  return (
    <div className='flex flex-col justify-center gap-6'>
      <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} w-xl h-32 border shadow-xl mx-auto 0`}
      ></div>
      <button onClick={handleTheme} className='bg-slate-700 hover:bg-black hover:cursor-pointer px-4 py-2 border border-transparent rounded-lg text-white font-semibold w-fit mx-auto 0'>Toggle theme</button>
    </div>
  )
}

export default Theme