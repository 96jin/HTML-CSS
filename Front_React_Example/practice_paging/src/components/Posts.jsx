import React from 'react'

export default function Posts({data}) {
  return (
    <>
      <div style=
      {{width:200, 
        height:50, 
        backgroundColor:'beige',
        margin:'0 auto',
        borderBottom:'1px solid gray',
        marginBottom:10}}>
        {data}
      </div>
    </>
  )
}
