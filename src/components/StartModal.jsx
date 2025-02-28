import React from 'react'

export const StartModal = ({startGame}) => {
  return (
    <div className='w-[200px] h-[200px] bg-black text-white flex flex-col items-center justify-center'>
        <h1>False Gabrielle</h1>
        <button className='bg-red-500' onClick={startGame}>Start</button>
    </div>
  )
}
