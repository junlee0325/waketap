import React, { useState, useEffect, useRef } from 'react'
import { Dot2 } from './Dot2'
import angel2 from "../assets/angel2.webp"


export const Background2 = ({exportRemaining, gameState}) => {
    // the "score" the user has to countdown from
    const [remaining, setRemaining] = useState(15)
    const [background, setBackground] = useState("none")
    const [backgroundImage, setBackgroundImage] = useState(null)
    const [feather, setFeather] = useState("")
    const [invert, setInvert] = useState("invert(0%)")
    const [showPlus, setShowPlus] = useState(false)
    const [showMinus, setShowMinus] = useState(false)
    const [dotOpacity, setDotOpacity] = useState("50%")
    // used to trigger Dot movement
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
      if(gameState === "start"){
        setTrigger(true)
      } else {
        setTrigger(false)
      }
    },[gameState])

    // exports "remaining" to App to be used by Bar at render and whenever "remaining" changes
    useEffect(() => {
      
      // exportRemaining prop carrys the "remaining" data with it when it gets exported 
      exportRemaining(remaining)
    },[remaining])

    // runs when onDotClick is activated
    const decreaseRemaining = () => {

        setRemaining(remaining - 1)
        setBackground("rgba(255,255,255,.1)")
        setFeather("0px 0px 30px rgb(255,255,255)")
        setShowPlus(true)
        setInvert("invert(100%)")

        // waits a bit before turning everything back to normal
        setTimeout(() => {
            setBackground("none")
            setFeather("")
            setShowPlus(false)
            setInvert("invert(0%)")
          }, 150);
    }

    // runs when the background div is clicked
    const increaseRemaining = () => {
        
        setRemaining(remaining + 1)
        setDotOpacity("0%")
        setBackgroundImage(angel2)
        setShowMinus(true)

        // waits a bit before turning everything back to normal
        setTimeout(() => {
            setBackground("none");
            setDotOpacity("50%")
            setShowMinus(false)
            setBackgroundImage()
          }, 150);
    }
  return (
    <div className='w-full h-[95%] relative' >
        <Dot2 onDotClick={decreaseRemaining} dotOpacity={dotOpacity} bgColor={background} feather={feather} invertPercent={invert} trigger={trigger}/>
        <div className='w-full h-full text-3xl flex justify-center bg-black '  onClick={increaseRemaining} style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            {showPlus && <span className='pt-10 text-white' >- 1</span>}
            {showMinus && <span className='pt-10 text-[red]' >+ 1</span>}
        </div>
    </div>
  )
}
