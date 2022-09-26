import React from 'react'

export default function Event() {
  
  const handleButtonClick = () => {
    console.log('handleButtonClick')
  }

  const handleClickCapture = () => {
    console.log('handleClickCapture')
  }

  const handleClickCapture2 = () => {
    console.log('handleClickCapture2')
  }

  const handleClickBubble = () => {
    console.log('handleClickBubble')
  }

  const handleMouseLeave = (e) => {
    console.dir(e)
  }

  // capture : 자식보다 부모가 먼저 이벤트를 인지하게 한다.
  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture ={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>Button</button>
      </div>
    </div>
  )
}
