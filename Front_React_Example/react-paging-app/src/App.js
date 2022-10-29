import React, { Component } from 'react'
import Pagination from './components/Pagination'
import Posts from './components/Posts'
import  './components/Pagination.css';

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      posts:[
        {id:1,title:'Post1'},
        {id:2,title:'Post2'},
        {id:3,title:'Post3'},
        {id:4,title:'Post4'},
        {id:5,title:'Post5'},
        {id:6,title:'Post6'},
        {id:7,title:'Post7'},
        {id:8,title:'Post8'},
        {id:9,title:'Post9'},
        {id:10,title:'Post10'},
        {id:11,title:'Post11'},
        {id:12,title:'Post12'},
      ],
      loading:false,
      currentPage:1,
      postsPerPage:3,
    }
  }
  componentDidMount(){}

  setCurrentPage=(page) => {
    console.log(`setCurrentPage(App):${page}`)
    this.setState({
      currentPage:page
    })
    console.log(`set!${page}`)
  }

  currentPosts = (totalPosts) => {
    const {currentPage, postsPerPage} = this.state
    const indexOfLast = currentPage * postsPerPage
    const indexOfFirst = indexOfLast - postsPerPage
    const slicePosts = totalPosts.slice(indexOfFirst, indexOfLast)
    return slicePosts
  }

  render() {

    const{posts, loading, postsPerPage} = this.state

    return (
      <div className='App'>
        <Posts posts={this.currentPosts(posts)} loading={loading}/>
        <Pagination postsPerPage={postsPerPage}
        totalPosts={posts.length} setCurrentPage={this.setCurrentPage}/>
      </div>
    )
  }
}
