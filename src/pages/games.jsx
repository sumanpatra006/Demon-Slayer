import React from 'react'
import GameCard from '../components/gameCard'
import { games } from '../../constants'

const Games = () => {
  return (
    <div className='min-h-screen flex flex-col items-center py-24 bg-gradient-to-r from-[#0f172a]  to-[#334155]'>
      <p className='text-center text-7xl font-semibold font-Pixel-Army mb-2 tracking-wider text-green-500'>Games!</p>
      <p className='text-center text-lg font-medium mb-14 font-mono text-white'>Unleash the Power Within - Join the Battle Against the Demons!</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {games.map((game, index) => (
          <GameCard
            key={index}
            id={game.id}
            title={game.title}
            description={game.description}
            image={game.src}
          />
        ))}
      </div>
    </div>
  )
}

export default Games
