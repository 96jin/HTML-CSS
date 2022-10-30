import React, { useEffect } from 'react'
import { useState } from 'react'

export default function PageNum({totalLen, pageNum, setPageNum, setPerPage, firstPosts, setPost,perPage}) {
  const [disabledPrev , setDisabledPrev] = useState(false)
  const [disabledNext , setDisabledNext] = useState(false)

  const pageNumList = []
  let i = 1
  while(i<=totalLen){
    pageNumList.push(i)
    i++
  }
// 페이지 당 글 갯수 바뀔 떄 마다 렌더링
  useEffect(()=>{
    setPageNum(1)
    setPost(firstPosts)
  },[perPage])

// 선택 페이지 바뀔 때 마다 렌더링
  useEffect(()=>{
    if(pageNum===1){
      setDisabledPrev(true)
    }
    else{
      setDisabledPrev(false)
    }
    if(pageNum===totalLen){
      setDisabledNext(true)
    }
    else{
      setDisabledNext(false)
    }
  },[pageNum, totalLen])

// 이전, 다음 버튼 클릭 이벤트
  const handlePrev = () => {
    if(pageNum===1){
      return
    }
    setPageNum(pageNum - 1)
  }

  const handleNext = () => {
    if(pageNum>=totalLen){
      return
    }
    setPageNum(pageNum + 1) 
  }


  return (
    <>
      <select onChange={(e)=>setPerPage(e.target.value)} defaultValue={3}>
        {/* <option value={1}>1</option> */}
        <option value={2}>2</option>
        {/* <option value={3}>3</option> */}
        <option value={4}>4</option>
        {/* <option value={5}>5</option> */}
        <option value={6}>6</option>
      </select>개씩 보기
      <br />
      <span style={{fontSize:12,marginLeft:'70%', border:'1px solid red'}}>{pageNum}page/{totalLen}page</span>
      <br />
      <div className='numListBox'>
        <div style={{width:50, }}>
          <button className='prevBtn' onClick={handlePrev} disabled={disabledPrev} style={{backgroundColor:'transparent', border:'none', cursor: !disabledPrev && 'pointer'}}>
            {'<'}
          </button>
        </div>
        <div className='numList' style={{width:'150px',height:'27px',overflow:'hidden'}}>
          <div className='numBtnBox' style={{height:'27px', transform: (totalLen>5 && pageNum>3 ) && `translate(-${30*(pageNum-3)}px)`}}>
            {pageNumList.map((num)=>(
              <button key={num} className='numBtn' onClick={()=>setPageNum(num)}
              style={(pageNum === num ) ? {backgroundColor:'blue', color:'white'}:{}}
              >
                <span style={{marginLeft: num>9 && '-2px' }}>{num}</span>
              </button>
            ))}
          </div>
        </div>
        <div style={{width:50,}}>
          <button className='nextBtn' onClick={handleNext} disabled={disabledNext} style={{backgroundColor:'transparent', border:'none', cursor: !disabledNext && 'pointer'}}>
            {'>'}
          </button>
        </div>
      </div>
    </>
  )
  // 스타일내에서 조건부 && 쓰려면 value값에다가 적어줘야한다.
}
