import React from 'react'
import { useNavigate } from 'react-router-dom'

const TogameSectionButton = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/games')
  }

  return (
    <div className='flex justify-center items-end h-[10vh] sm:h-[15vh]'>
      <button className='p-4 bg-green-500 font-anime text-xs sm:text-base rounded-md'
        onClick={handleClick}
      >
      🤖 Enter game mode 🤖</button>
    </div>
  )
}

export default TogameSectionButton
