import React from 'react'

export default function Posts({post}) {
  return (
    <div style={{
      backgroundColor:'beige',
      marginBottom:10,
      width: 200,
      height: 50,
      borderBottom:'1px solid gray'
    
  }}>{post}</div>
  )
}
