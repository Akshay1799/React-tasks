import React from 'react'
import { useState, useEffect } from 'react'

const RandomQuote = () => {
    const [quote, setQuote] = useState(null);

    async function fetchQuote (){
        try {
            const response = await fetch('https://dummyjson.com/quotes')
            const data = await response.json();

            const randomIndex = Math.floor(Math.random()*data.quotes.length)
            setQuote(data.quotes[randomIndex]);

            
            return clearInterval(timer)
        } catch (error) {
            console.error('Fetching error: ', error);
        }
    }
    useEffect(() => {
        fetchQuote();
    }, [])
    
  return (
    <div>
        <h2 className='text-2xl font-bold my-6'>Random quote generator</h2>
        {
            quote && (
                <p className='border border-gray-100 rounded-lg py-4 px-6 shadow-lg mx-auto 0 w-2xl my-4'><strong>Quote: </strong>{quote.quote}</p>
            )
        }
        <button onClick={fetchQuote} className='shadow-xl bg-black hover:scale-95 duration-200 hover:cursor-pointer border rounded-lg py-1 px-4 text-white'>New Quote</button>
    </div>
  )
}

export default RandomQuote