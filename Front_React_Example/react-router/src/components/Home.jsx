import React from 'react'
import SearchTab from './SearchTab'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import img1 from '../image/slide-image1.jfif'
import img2 from '../image/slide-image2.jfif'
import img3 from '../image/slide-image3.jfif'


export default function Home() {
  const img = [img1, img2, img3]
  const result = img.map((img,i)=>(
    <div key={i} className="slide"><img src={img} alt='사진'></img></div>
  ))
  return (
    <div className='home'>
      <div className='home-btn' onClick={()=>window.location.href='/'}>Home</div>
      <SearchTab/>
      <div className='slide-wrap'>
        <Slider autoplay={true} autoplaySpeed={3000} fade={true} dots={true} useCSS={true}>
          {result}
        </Slider>
      </div>
    </div>
  )
}
