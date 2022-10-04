import React from 'react'
import {createPortal} from 'react-dom'
import ThankyouDialog from './ThankyouDialog'

const Portal = (props) => {
  return createPortal(props.children, document.getElementById('portal'))
  //  props의 children을 portal아이디인 태그에 넣는다.
}

export default function Example() {
  // Portal 은 root 에 들어있지않고 portal에 들어있기 때문에, 이벤트 버블링이 발생하면 안된다.
  // portal 한테는 버블링이 일어나도 root에는 버블링이 일어나면 안된다.
  // 하지만 리액트에서 의도적으로 portal에 있는 요소더라도, root에 버블링이 되도록 전달해주고있다.
  return (
    <div onClick={()=>console.log('div')}>
      <Portal>
        <ThankyouDialog/>
      </Portal>
      <div style={{position:"absolute"}}>
        <button>하하하</button>
      </div>
    </div>
  )
}
