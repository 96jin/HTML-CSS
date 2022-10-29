import React from 'react'
import '../css/Person.css'

export default function Person({person}) { 
  // Person 컴포넌트에 주입시킨 데이터를 받는다.
  return (
    <div id='person'>
      <div>{person.name}</div>
      <div>{person.age}</div>
      <div>{person.height}</div>
    </div>
  )
}
