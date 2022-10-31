import React from 'react'
import { useState, useReducer } from 'react';

// reducer - state를 업데이트 하는 역할 (은행)
// dispatch - state 업데이트를 위한 도구
// action - 요구의 내용

// 컴포넌트 밖에다가 reducer 을 만들어준다.
// reducer는 인자를 두개 받는다
// state에 현재 상태를 받는다.
const reducer = (state, action) => {
  console.log('reducer가 일을 합니다.',state,action)
  switch(action.type){
    case 'deposit':
      return state+action.payload
    case 'withdraw':
      return state - action.payload
    default:
      return state
      
  }

// return안에 있는 값이 새로 업데이트 될 state이다.
}
// useReducer 도 useState처럼 상태가 바뀔 때 마다 렌더링 된다.

export default function ReducerMyStudy() {
  const [number, setNumber] = useState(0)
  const [money, dispatch] = useReducer(reducer,0);
  // useReducer은 useState와 같이 배열을 반환
  // 첫번째 요소에는 새로 만들어둔 state , 두번째에는 useReducer가 만든 dispatch 함수가 있다.
  // useReducer은 인자를 두개 받는다
  // 첫번째 인자는 reducer을 받고, money 의 state에 들어갈 초기값을 넣어준다.
  // useReducer에서 만들어준 state는 dispatch를 통해서만 업데이트 가능하다.
  // dispatch를 호출하면 우리가 만든 reducer가 호출되는데, 인자로 action을 받는다.
  // 인자로 받는 action은 객체 형태로 전달해준다.
  // 객체 안에 type 이랑 payload(현재 input에 들어있는 값)를 전달해준다.
  // reducer 은 state에 직접 접근하면 안되므로 payload에 담아서 준다.

  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영합니다.</h2>
      <p>잔고 : {money} 원</p>
      <input type="number" 
        value={number} 
        onChange={(e)=>setNumber(parseInt(e.target.value))} 
        step='1000'/>
        {/* step 증가 감소가 1000씩 된다. */}
      <button onClick={()=>{
        dispatch({type:'deposit', payload:number})
        }}>
          예금</button>
      <button onClick={()=>{
        dispatch({type:'withdraw', payload:number})
      }}>출금</button>
    </div>
  )
}
