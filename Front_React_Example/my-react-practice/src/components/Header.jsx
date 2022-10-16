import React from "react";
import "../css/Header.css";

export default function Header(props) {
  return (
    <header id="header" {...props}>
      <div id="header_logo">로고</div>
      <div id="nav">
        <ul id="lnb">
          <li id='li1'>
            <a href='#'>탑</a>
            <ul>
              <li><a href='#'>블라우스</a></li>
              <li><a href='#'>티</a></li>
              <li><a href='#'>셔츠</a></li>
              <li><a href='#'>니트</a></li>
            </ul>
          </li>

          <li id='li2'>
            <a href='#'>아우터</a>
              <ul>
                <li><a href='#'>자켓</a></li>
                <li><a href='#'>코트</a></li>
                <li><a href='#'>가디건</a></li>
                <li><a href='#'>머플러</a></li>
              </ul>
          </li>

          <li id='li3'>
            <a href='#'>팬츠</a>
              <ul>
                <li><a href='#'>청바지</a></li>
                <li><a href='#'>짧은바지</a></li>
                <li><a href='#'>긴바지</a></li>
                <li><a href='#'>레깅스</a></li>
              </ul>
          </li>

          <li id='li4'>
            <a href='#'>악세서리</a>
              <ul>
                <li><a href='#'>귀걸이</a></li>
                <li><a href='#'>목걸이</a></li>
                <li><a href='#'>반지</a></li>
                <li><a href='#'>팔찌</a></li>
              </ul>
          </li>
        </ul>
      </div>
    </header>
  );
}
