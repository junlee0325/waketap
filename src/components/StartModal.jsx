import React from 'react'

export const StartModal = ({startGame}) => {
  return (
    <div className='w-full h-fit py-2 bg-black text-white flex flex-col items-center justify-center'>
        <h1 className='text-4xl pb-2'>The False Gabriel</h1>
        <span>The Devil is attempting to deceive humanity by pretending to be the archangle Gabriel.</span>
        <span>Expel the Devil by clicking on them before the time runs out.</span>
        <button className='bg-red-500 px-2 pb-1 m-3 text-xl rounded-sm hover:bg-white hover:text-red-500 active:translate-y-[3px]' onClick={startGame}>Start</button>
        <span className='text-xs'>This game is inspired by the horror Youtube series "The Mandela Catalogue" by Alex Kister</span>
    </div>
  )
}
