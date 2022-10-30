import React from 'react'

export default function PageNumber({setPageNum, totalLen, pageNum}) {
  const pageNumList = []
  let i = 1
  while(i<=totalLen){
    pageNumList.push(i)
    i++
  }

  return (
    <>
      {pageNumList.map((num)=>(
        <button onClick={()=>setPageNum(num)}
        style={
          (pageNum===num) && { backgroundColor:'blue',color:'white' }}
        >
          {num}
        </button>
      ))}
    </>
  )
}
