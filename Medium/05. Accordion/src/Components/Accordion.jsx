import React from 'react'
import { useState } from 'react'
const Accordion = () => {
  const [activeIndex, setactiveIndex] = useState(null);

  const sections = [
    { title: "What is React?", content: "React is a JS library for building UIs." },
    { title: "What is Tailwind CSS?", content: "Tailwind is a utility-first CSS framework." },
    { title: "What is useState?", content: "A hook that lets you add state in functional components." }
  ];

  const handleToggle = (index)=>{
    setactiveIndex(activeIndex === index? null:index)
  }

  return (
    <>
      {sections.map((section, index) => (
        <div key={index} className='w-xl px-4 py-2 mx-auto 0 flex flex-col justify-start border border-gray-100 '>
          <h2 className='font-semibold flex justify-between mt-2'>
            {section.title} <span onClick={()=>handleToggle(index)} className='-mt-2 font-bold text-2xl hover:cursor-pointer'>{activeIndex === index ? '-' : '+'}</span>
          </h2>
          {
            activeIndex === index && (
              <p className='flex justify-start text-gray-600'>{section.content}</p>
            )
          }
        </div>
      ))}
    </>
  )
}

export default Accordion