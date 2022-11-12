import React from 'react'
import SearchTab from './SearchTab'

export default function Home() {
  return (
    <div className='home'>
      <div className='home-btn' onClick={()=>window.location.href='/'}>Home</div>
      <SearchTab/>
    </div>
  )
}
