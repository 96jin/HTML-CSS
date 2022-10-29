import React from 'react'

export default function PageNum({totalLen, pageNum, setPageNum}) {
  const pageNumList = []
  let i = 1
  while(i<=totalLen){
    pageNumList.push(i)
    i++
  }


  return (
    <>
      {pageNumList.map((num)=>(
        <button key={num} onClick={()=>setPageNum(num)}
        style={(pageNum === num ) ? {backgroundColor:'blue', color:'white'}:{}}
        >
          {num}
        </button>
      ))}
    </>
  )
}
