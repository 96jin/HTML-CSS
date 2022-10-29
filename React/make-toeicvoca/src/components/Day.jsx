import React from 'react'
import {useParams} from 'react-router-dom'
import Word from './Word'
// import { useState, useEffect } from 'react';
import useFetch from './../hooks/useFetch';

export default function Day() {
  
  // const day = useParams().day
  const {day} = useParams()
  const words = useFetch(`http://localhost:3001/words?day=${day}`)
  
  // const [words, setWords] = useState([])
  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //   .then(res=>{
  //     return res.json()})
  //   .then(data=>{
  //     setWords(data)})
  // },[day])

  return (
    <>
      <h2>Day {day}</h2>
        <table>
          <tbody>
            {words.map((word)=>(
              <Word key={word.id} word={word}/>
            ))}
          </tbody>
        </table>
    </>
  )
}
