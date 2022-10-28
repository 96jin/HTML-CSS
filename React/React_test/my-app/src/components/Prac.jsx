import React, { useRef } from 'react'
import { useEffect } from 'react'

export default function Prac() {
  const  divRef = useRef([])
  useEffect(()=>{
    console.log(divRef)
    
  },[])
  
  return (
    <>
      <input ref={divRef}/>
      <input ref={divRef}/>
      <input ref={divRef}/>
    </>
  )
}
