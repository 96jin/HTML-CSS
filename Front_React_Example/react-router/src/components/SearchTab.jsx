import React, { Component } from "react";

export default class SearchTab extends Component {
  constructor(props){
    super(props)
    this.state={
      query:'',
    }
  }
  moveSearch = () => {
    alert('검색버튼 누름!')
    const {query} = this.state
    window.location.href=`/search?query=${query}&encoding=utf-8`
    // search 요청을 보내고, query라는 이름의 도서관 값을 넣는다.
    // window.location.href -> 다른 주소로 리다이렉트
  }
  inputChange = (e) => {
    console.log(e.target.value.trim())
    
    this.setState({
      query:e.target.value.trim()
    })
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="검색어 입력" onChange={this.inputChange} />
        <button onClick={this.moveSearch}>검색</button>
      </div>
    )
  }
}
