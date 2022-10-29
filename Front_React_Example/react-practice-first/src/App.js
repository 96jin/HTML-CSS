import './App.css';
import React, { Component } from 'react'
import Person from './components/Person';

class App extends Component{ // App클래스가 Component클래스에게 상속 받는다.
  constructor(props){ // 생성자 : 객체가 생설될 떄 생성되는것
    super(props)  // suer 상위 클래스 생성자
    this.state = {
      // 상태값
      personList: [
        {name:'이민호',age:20, height:176.6},
        {name:'정채연',age:21, height:163.1},
        {name:'송중기',age:22, height:178.2},
      ]} // 길이가 3인 JSON 배열
    }
  
  render(){ // 라이트 사이클 함수
    return(
      <div id='App'>
        {this.state.personList.map((person,i) => (
          <Person key={i} person={person}/>
        ))}
      </div>
  )
}}


export default App;