import React from 'react';
import './Box.css'

    
const Box = () => {
  return (
    <div className="h-screen w-full bg-gray-700 flex-col items-center justify-center">
        <p className='text-center pt-16 bento-title !text-[4.5rem] text-white'>
          I'M INSIDE THE BOX 🙇‍♀️
          </p>
          <p className='text-center pt-4 font-general !text-[1.1rem] text-white'>
          Hover to open the Box 📦
          </p>

      <div className='flex justify-center h-[80vh] items-center'>
        <div className="relative h-[450px] w-[350px] border-[5px] border-[#452e20] perspective-[1000px]"
        id='wrapper'>
          {/* Image background */}
          <img
            src="/images/nezuko.jpg"
            alt="minion"
            className="absolute w-full h-full object-cover"
          />
          {/* Door with hover rotation */}
          <div className="absolute h-full w-full bg-[#785138] flex justify-evenly items-center transform transition-transform duration-700 origin-right border-l border-black"
          id='door'>
            {/* Shapes inside door */}
            <div className="h-full border-[4px] border-[#222324]"></div>
            <div className="h-full border-[4px] border-[#222324]"></div>
            <div className="h-full border-[4px] border-[#222324]"></div>
            <div className="h-full border-[4px] border-[#222324]"></div>
            {/* Door knob */}
            <div className="absolute top-[40%] left-3 w-[10px] h-[50px] bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
