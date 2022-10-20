import React from "react";
import "../css/Header.css";

export default function Header(props) {
  const lnbRef1 = React.useRef();
  const lnbRef2 = React.useRef();
  const lnbRef3 = React.useRef();
  const lnbRef4 = React.useRef();
  const lnbRef = React.useRef([])

  const onMouseOver = (n) => () => {
    lnbRef.current[n].style.display='block';
  }

  return (
    <header id="header">
      <div id="logo">
        <img src="./images/logo.png" alt="상단로고" />
      </div>
      <nav id="nav">
        <ul id="gnb">
          <li
            onMouseOver={() => {
              lnbRef.current[0].style.display = "block";
            }}
            onMouseOut={() => {
              lnbRef.current[0].style.display = "none";
            }}
          >
            <a href="#">탑</a>
            <ul className="lnb" ref={el => lnbRef.current[0] =el}>
              <li>
                <a href="#">블라우스</a>
              </li>
              <li>
                <a href="#">티</a>
              </li>
              <li>
                <a href="#">셔츠</a>
              </li>
              <li>
                <a href="#">니트</a>
              </li>
            </ul>
          </li>
          <li
            onMouseOver={onMouseOver(1)}
            onMouseOut={() => {
              lnbRef.current[1].style.display = "none";
            }}
          >
            <a href="#">아우터</a>
            <ul className="lnb" ref={el => lnbRef.current[1] =el}>
              <li>
                <a href="#">자켓</a>
              </li>
              <li>
                <a href="#">코트</a>
              </li>
              <li>
                <a href="#">가디건</a>
              </li>
              <li>
                <a href="#">머플러</a>
              </li>
            </ul>
          </li>
          <li
            onMouseOver={() => {
              lnbRef3.current.style.display = "block";
            }}
            onMouseOut={() => {
              lnbRef3.current.style.display = "none";
            }}
          >
            <a href="#">팬츠</a>
            <ul className="lnb" ref={lnbRef3}>
              <li>
                <a href="#">청바지</a>
              </li>
              <li>
                <a href="#">짧은바지</a>
              </li>
              <li>
                <a href="#">긴바지</a>
              </li>
              <li>
                <a href="#">레깅스</a>
              </li>
            </ul>
          </li>
          <li
            onMouseOver={() => {
              lnbRef4.current.style.display = "block";
            }}
            onMouseOut={() => {
              lnbRef4.current.style.display = "none";
            }}
          >
            <a href="#">악세서리</a>
            <ul className="lnb" ref={lnbRef4}>
              <li>
                <a href="#">귀걸이</a>
              </li>
              <li>
                <a href="#">목걸이</a>
              </li>
              <li>
                <a href="#">반지</a>
              </li>
              <li>
                <a href="#">팔찌</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
