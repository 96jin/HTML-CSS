import React from 'react'
import '../css/Footer.css'

export default function Footer() {
  return (
    <div id="footer">
      <div id="logo">
        <img src="images/logo2.png" alt="하단로고"/>
      </div>
      <div id="copy">
        <address>
          서울시 강남구 테헤란로 152 (역삼동 강남 파이낸스) 대표이사:변광윤<br/>
          사업자 등록번호: 220-81-83676 통신판매업신고: 강남 10630호
        </address>
      </div>
      <div id="sns">
        <ul>
          <li>
            <a href="#">
              <img src="./images/insta.png" alt="인스타그램"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/fb.png" alt="페이스북"/>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/kakao.png" alt="카카오"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
