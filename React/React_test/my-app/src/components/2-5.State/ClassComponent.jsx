// rcc 하면 리액트 클래스 컴포넌트 자동생성

import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};  // 기본값 세팅
  }

  componentDidMount() { // 그려지자마자 호출(lifecycle)
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {  // 이 컴포넌트가 사라지기 직전에 호출 될 함수(lifecycle)
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
