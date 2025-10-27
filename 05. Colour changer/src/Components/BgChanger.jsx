import {React, useState} from "react";

const BgChanger = () => {
  const colours = ['pink', 'red', 'brown', 'blue']
  const [color, setColor] = useState('white')

  const handleClick = ()=>{
    const randomIndex = Math.floor(Math.random() * colours.length);
    const randomColor = colours[randomIndex]
    setColor(randomColor);
  }
  return (
    <div>
      <div className="w-2xl min-h-44 border shadow-2xl my-4"
      style={{backgroundColor:color}}>

      </div>
      <button onClick={handleClick}>click to change color</button>
    </div>

  )
}

export default BgChanger