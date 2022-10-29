import React from 'react'
import '../css/Contents.css'

export default function Contents() {
  return (
    <div id="contents">
      <div id="cont1">
        <div id="tab">
            <div id="tab-btn">
              <a href="#">공지사항</a>
              <a href="#">갤러리</a>
            </div>
            <div id="tab-contents">
              <div id="notice">
                <ul>
                  <li>
                    <a href="#">
                      <span id="not1">공지사항1</span>
                      <span>[2022.01.01]</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>공지사항2</span>
                      <span>[2022.01.01]</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>공지사항3</span>
                      <span>[2022.01.01]</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>공지사항4</span>
                      <span>[2022.01.01]</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div id="gallery">
                <ul>
                  <li>
                    <a href="#">
                      <img src="./images/gallery1.jpg" alt="갤러리1"/>
                  </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/gallery2.jpg" alt="갤러리2"/>
                  </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="./images/gallery3.jpg" alt="갤러리3"/>
                  </a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
      <div id="cont2">
        <a href="#"><img src="./images/banner_img.jpg" alt=""/></a>
      </div>
      <div id="cont3">
        <a href="#"><img src="./images/shortcut_img.jpg" alt=""/></a>
      </div>
    </div>
  )
}
