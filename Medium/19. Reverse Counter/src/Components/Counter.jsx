import React from 'react'
import { useState, useEffect } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [direction, setDirection] = useState('up');
    const [isRunning, setIsRunning] = useState(false);

    const startCounter = () => {
        setIsRunning(true);
    }

    useEffect(() => {
        if (!isRunning) return;

        const timer = setInterval(() => {
            setCounter(prev => {
            if (direction === 'up') {
                if (prev === 10) {
                    setDirection('down');
                    return prev - 1;
                }
                return prev + 1;
            }
            if (direction === 'down'){
                if (prev === 0) {
                    setDirection('up');
                    return prev + 1;
                }
                return prev - 1;
            }
            return prev;
        })}, 1000);

        return () => clearInterval(timer);
    }, [isRunning, direction]);

return (
    <div>
        <p className='text-2xl font-bold my-6'>{counter}</p>
        <button onClick={startCounter} className='hover:cursor-pointer hover:scale-95 duration-500 text-white font-semibold bg-black border border-transparent rounded-lg px-4 py-2'>start counter</button>
    </div>
)

}
export default Counter