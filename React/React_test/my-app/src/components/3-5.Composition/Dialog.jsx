import React from 'react'

export default function Dialog(props) {
  return (
    <div style={{backgroundColor : 'pink', color:'red'}}>
      {props.children}
    </div>
  )
}
