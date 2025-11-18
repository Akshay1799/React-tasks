import React from 'react'
import { useState, useEffect } from 'react'

const PaginatedAPI = () => {
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState([]);

  const fetchData = async()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    fetchData();
  }, [page])

  const handlePreBtn = ()=>{
    setPage(prev => (prev>1? prev-1:prev))
  }
  const handleNextBtn = ()=>{
    setPage(prev => prev+1)
  }

  
  return (
    <div className='flex justify-center flex-col gap-4'>
      {
        posts.length > 0 && (
          <div>
            {posts.map((post, index)=>(
              <div key={index} className='bg-gray-50 flex flex-col justify-center items-center mx-auto 0 w-xl gap-3 h-fit border border-gray-300 rounded-lg m-2 p-4'>
                <p className='font-semibold text-lg px-4 disabled:(``)'>{post.title}</p>
                <p className='px-4'>{post.body}</p>
              </div>
            ))}
          </div>
        )
      }
      <div className='flex justify-center gap-2'>
        <button onClick={handlePreBtn} className='bg-gray-100 hover:bg-gray-200 border border-transparent rounded-lg px-4 py-2 w-fit hover:cursor-pointer'>Pre</button>
        <button onClick={handleNextBtn} className='bg-gray-100 hover:bg-gray-200 border border-transparent rounded-lg px-4 py-2 w-fit hover:cursor-pointer'>Next</button>

      </div>
    </div>
  )
}

export default PaginatedAPI