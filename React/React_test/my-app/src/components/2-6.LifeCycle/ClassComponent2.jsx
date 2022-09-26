import React, { Component } from 'react'

export default class ClassComponent2 extends Component {
  constructor(props){
    super(props)
    console.log('constructor')
    this.state = {date : new Date()}
    // this.handleClick = this.handleClick.bind(this)
    // handleClick에서 this가 어떤것을 가리키는지 모르기때문에 여기서 지정해줘야한다.
    // 애로우 함수를 사용하면 따로 지정 안해줘도 된다.
    // 애로우 함수는 바깥과의 this를 공유하기때문에 this가 무엇인지 알고있다.
  }
  
  componentDidMount(){
    console.log('componentDidMount')

    this.timerID = setInterval(() => this.tick(),1000)
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
    
  }

  componentWillUnmount(){
    console.log('tick')

    clearInterval(this.timerID)
  }

  tick(){
    console.log('tick')
    this.setState({date : new Date()})
  }

  handleClick = () => {
    alert(this.state.date)
  }

  render() {
    console.log('render')
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, world!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
