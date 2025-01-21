import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReturnHomeSectionButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <button className='p-4 bg-orange-400 font-circular-web font-semibold text-xs sm:text-base rounded-3xl text-black'
        onClick={handleClick}
      >
      Return Home</button>
  )
}

export default ReturnHomeSectionButton