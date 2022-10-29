import React from 'react'
import {Link} from 'react-router-dom'
import useFetch from './../hooks/useFetch';
// import { useState, useEffect } from 'react';
// react-router 에서는 a대신 Link를 사용한다

export default function DayList() {
  const days = useFetch('http://localhost:3001/days')
  // const [days,setDays] = useState([])

  // // API 호출같은 경우에는 useEffect 를 사용하여 렌더링 후에 호출하는것이 좋다
  // useEffect(() => {
  //   fetch('http://localhost:3001/days') // promise 반환
  //   .then(res => {                  // then을 이용해서 res.json을 다시 반환, http응답이므로 json으로 바꿔줘야한다.
  //     return res.json()
  //   })
  //   .then(data => {
  //     setDays(data)
  //   })
  // },[])

  return (
    <ul className='list_day'>
      {days.map((day)=>(
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  )
}
