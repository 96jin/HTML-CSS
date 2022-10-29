import React from 'react'
import { useState } from 'react';

export default function Word({word : w}) {
  const [word,setWord] = useState(w)
  const [isShow,setIsShow] = useState(false)
  const [isDone,setIsDone] = useState(word.isDone)

  function toggleShow(){
    setIsShow(!isShow)
  }
  function toggleDone(){
    // setIsDone(!isDone)
    fetch(`http://localhost:3001/words/${word.id}`,{
      method : 'PUT',
      headers : {
        'Content-Type' : 'application/json' // Content-Type은 보내는 리소스의 타입을 의미한다.
      },
      body: JSON.stringify({    // JSON문자열로 변환해줘야한다.
        ...word,          // get 과는 다르게 put은 수정할 정보를 body에 넣어서 보내준다.
        isDone : !isDone, // 기존 데이터에 isDone을 바꿔서 보내준다
      })
    })
    .then(res=>{
      if(res.ok){
        setIsDone(!isDone)
      }
    })
  }

  function del(){
    if(window.confirm('삭제 하겠습니까?'))
    fetch(`http://localhost:3001/words/${word.id}`,{
      method : 'DELETE'
    }).then(res=>{
      if(res.ok){
        setWord({id: 0})  // 삭제가 되었다면 word의 id를 0으로 바꿔준다.
      }
    })
  }
  if(word.id===0){
    return null
    // null 을 리턴해주면 아무것도 표현해주지 않는다. 밑의 컴포넌트를 실행하지 않는다.!!
  }

  return (
    <>
      <tr className={isDone ? 'off' : ''}>
        <td onClick={toggleDone}><input className='check_input' type="checkbox" checked={isDone} onChange={toggleDone}/></td>
        <td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
          <button onClick={toggleShow}>뜻 {!isShow? '보기' : '숨기기' }</button>
          <button onClick={del} className='btn_del'>삭제</button>
        </td>
      </tr>
    </>
  )
}
