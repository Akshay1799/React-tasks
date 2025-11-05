import React from 'react'
import { useState } from 'react'

const Rating = () => {
    const [rating, setRating] = useState(0);

    let stars = [1,2,3,4,5];
    
  return (
    <div>
        {stars.map((star)=>(
            <span 
            key={star} 
            onClick={()=>setRating(star)} 
            className={star <= rating ? 'text-yellow-400': 'text-gray-400 hover:cursor-pointer'}>★</span>
        ))}
    </div>
  )
}

export default Rating