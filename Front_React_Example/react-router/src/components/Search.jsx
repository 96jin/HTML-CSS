import React, { Component } from "react";
import queryString from 'query-string'
import axios from 'axios'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult : []
    };
  }
  componentDidMount() {
    // DOM이 완성되면 자동 호출 (useEffect와 같다)
    console.log(window.location);
    console.log(window.location.search);
    // console.log(decodeURIComponent(window.location.search.slice(7,)))
    const queryObj = queryString.parse(window.location.search)
    // json 형태로 알아서 나눠준다.
    console.log(queryObj)
    const searchText = queryObj.query
    this.getData(searchText)
  }
  getData = async(searchText) => {
    const result = await axios.get(`/search/${searchText}`)
    // axios 해서 서버에서 데이터를 받아온다.
    console.log(result.data)
    this.setState({
      searchResult : result.data
    })
    console.log(this.state.searchResult)
    /* 이렇게도 할 수 있다.
    const result = await axios({
      method: 'get',
      url:'http://openapi.naver.com/v1/search/book.json?query=${searchText}',
      dataType:'json',
      headers:{
        "X-Naver-Client-Id":'',
        "X-Naver-Client-Secret":''
      }
    })
    */
  }
  render() {
    if(this.state.searchResult===undefined){
      return <div>로딩중</div>
    }else{
      return (
        <div className="search-result">
          {this.searchResult && this.searchResult[0].title}
        </div>
      )
    }
  }
}
