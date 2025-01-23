import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReturnGameSectionButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/games')
  }

  return (
    <button className='p-3 bg-blue-400 font-circular-web font-semibold text-xs sm:text-base rounded-3xl text-gray-900'
    onClick={handleClick}
  >
  Explore all Games
  </button>
  )
}

export default ReturnGameSectionButton