import React from 'react'

export default function State() {
  const initialCount = 0
  const [count, setCount] = React.useState(initialCount)
  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prev => prev-1)}>-</button>
      <button onClick={() => setCount(prev => prev+1)}>+</button>
    </div>
  )
}
