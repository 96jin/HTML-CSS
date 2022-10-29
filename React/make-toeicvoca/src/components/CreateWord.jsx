import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import useFetch from './../hooks/useFetch';

export default function CreateWord() {
  const days = useFetch('http://localhost:3001/days')
  const nav = useNavigate() 

  const engRef = useRef()
  const korRef = useRef()
  const dayRef = useRef()

  function onSubmit(e){
    e.preventDefault()

    fetch(`http://localhost:3001/words/`,{
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json',
    },
    body : JSON.stringify({
      day : dayRef.current.value,
      eng : engRef.current.value,
      kor : korRef.current.value,
      isDone: false,
    })
  }).then(res=>{
    if(res.ok){
      alert('입력 완료')
      nav(`/day/${dayRef.current.value}`)
      }
    })
    korRef.current.value=''
    engRef.current.value=''
  }

  


  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label htmlFor="">Eng</label>
        <input type="text" placeholder='ex)computer' ref={engRef}/>
      </div>
      <div className="input_area">
        <label htmlFor="">Kor</label>
        <input type="text" placeholder='ex)컴퓨터'ref={korRef}/>
      </div>
      <div className="input_area">
        <label htmlFor="">Day</label>
        <select ref={dayRef}>
          {days.map((day)=><option key={day.id} value={day.day}>{day.day}일차</option>)}
        </select>
      </div>
      <button>저장</button>
    </form>
  )
}
