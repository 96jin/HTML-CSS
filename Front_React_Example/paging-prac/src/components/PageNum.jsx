import React, { useEffect } from 'react'

export default function PageNum({totalLen, pageNum, setPageNum, setPerPage, firstPosts, setPost,perPage}) {
  const pageNumList = []
  let i = 1
  while(i<=totalLen){
    pageNumList.push(i)
    i++
  }

  useEffect(()=>{
    setPageNum(1)
    setPost(firstPosts)
  },[perPage])

  return (
    <>
      <select onChange={(e)=>setPerPage(e.target.value)}>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
      </select>개씩 보기
      <br />
      <br />
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
