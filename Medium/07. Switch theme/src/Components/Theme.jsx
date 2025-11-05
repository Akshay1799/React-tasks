import React from 'react'
import { useState } from 'react'

const Theme = () => {
    const [theme, settheme] = useState(false);

    const toggleTheme = () => {
        settheme(!theme)
    }
    return (

            <div className='flex justify-center flex-col gap-4 mx-auto 0 w-fit'>
                <div className={`${theme ? "bg-gray-900 text-white" : "bg-white text-black"} border px-4 py-2 w-lg`} > Hello there! 👋</div>
                <button onClick={toggleTheme} className=' active:scale-95 w-fit mx-auto 0 px-4 py-1 border hover:cursor-pointer font-semibold border rounded-lg'>Switch theme</button>
            </div >
  )
}

export default Theme