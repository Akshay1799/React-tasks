import React from 'react'
import { useState } from 'react'

const Cart = () => {
    const [count, setCount] = useState(0);

    const products = [
        { id: 1, name: "T-shirt", price: 499 },
        { id: 2, name: "Shoes", price: 1299 },
        { id: 3, name: "Jeans", price: 999 },
    ];

    const handleCartClick = ()=>{
        setCount(prev => prev + 1)
    }
    return (
        <div className='flex flex-col gap-4'>
            <div className='relative flex justify-center mx-auto 0 gap-4 w-fit  px-4 py-1 border border-gray rounded-full'>
                <p>Cart</p>
                <p className='top-[-15px] -right-1 absolute bg-red-500 border border-red-500 rounded-full px-2'>{count}</p>
            </div>
            {products.length > 0 && (
                <div className='flex justify-center '>
                    {products.map((item, index) => (
                        <div key={index} className='w-fit py-6 px-6 flex flex-col gap-4 border border-gray-200 rounded-xl m-2'>
                            <p className='font-semibold'>Item Name: {item.name}</p>
                            <p className='font-semibold text-2xl'>Price: {item.price}</p>
                            <button onClick={handleCartClick} className='bg-slate-700 hover:bg-black hover:cursor-pointer px-4 py-2 border rounded-lg text-white font-semibold'>
                                Add to cart
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Cart