import React, { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";

const Counts = () => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(false);

  const handleClick = () => {
    // increase count once per click
    setCount(prev => prev + 1);
    setLike(true);

    setTimeout(() => {
      setLike(false);
    }, 300);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 mt-10">
      <p className="text-lg font-semibold">{count} Likes</p>

      {like ? (
        <FaHeart
          size={34}
          onClick={handleClick}
          className="text-pink-500 transition-all ease-in duration-300 scale-105 hover:cursor-pointer"
        />
      ) : (
        <CiHeart
          size={34}
          onClick={handleClick}
          className="text-gray-600 transition-all ease-in-out duration-300 hover:scale-110 hover:cursor-pointer"
        />
      )}
    </div>
  );
};

export default Counts;
