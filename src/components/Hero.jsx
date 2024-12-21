import React, { useRef } from 'react'
import { useState } from 'react'

function Hero() {

  const [currIndex , setCurrIndex] = useState(1);
  const [hasClicked ,setHasClicked] = useState(false)
  const [loading , setLoading] = useState(true)
  const [loadedVid , setLoadedVid] = useState(0)
  
  const totalVid = 10;
  const nextVidRef = useRef(null)

  const handlMiniVdClick = ()=>{
    setHasClicked(treu)
    setCurrIndex((prevIndex)=>prevIndex + 1)
  }

  const getVdSorurce = (index)=>`public/videos/hero-${index}.mp4`

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
      <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
        <div>
          <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
            <div onClick={handlMiniVdClick} className=''>
              <video 
                ref ={nextVidRef}
                src={getVdSorurce(currIndex+1)} />
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Hero
