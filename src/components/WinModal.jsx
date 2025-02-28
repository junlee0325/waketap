import React from 'react'

export const WinModal = () => {
  return (
    <div className='w-[200px] h-[200px] bg-black text-white flex flex-col items-center justify-center'>
        <h1>Win</h1>
        <button className='bg-red-500' onClick={() => window.location.reload()}>Play Again</button>
    </div>
  )
}
