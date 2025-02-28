import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Bar2 } from './components/Bar2'
import { Background2 } from './components/Background2'

function App() {
  const [number, setNumber] = useState()

  // recieves data from Background and updates "number" to be used by Bar. Since the "number" data is brought in within the parenthesis, it becomes "count"
  const getCount = (count) => {

    // setNumber takes in "count" (data from Background) to update "number" to be used in Bar
    setNumber(count)
  }



  return (
    <div className='h-full'>
      <Bar2 count={number}/>
      <Background2 exportRemaining={getCount}/>
    </div>
  )
}

export default App
