import React, { Component } from 'react'

export default class Pagination extends Component {

    constructor(props){
        super(props)
        this.state= {
                loading:this.props.loading,
                posts:this.props.posts,
                totalPosts:this.props.totalPosts,
                postsPerPage:this.props.postsPerPage,
        }
    }

  render() {
    let pageNumbers = []
    const {totalPosts, postsPerPage} = this.state;
    console.log(totalPosts)
    console.log(postsPerPage)
    let i = 1
    while(i<=Math.ceil(totalPosts/postsPerPage)){
        pageNumbers.push(i)
        i++;
    }
    console.log(pageNumbers)

    const pageList = pageNumbers.map((page) => {
      return (
        <span className='page' key={page} onClick={()=>this.props.setCurrentPage(page)}>
            {page}
        </span>
      )
    })

    return (
      <div className='Pagination'>
        <span>페이지당 포스트 갯수 : {this.props.postsPerPage}</span>
        <span>총 포스트 갯수 : {this.props.totalPosts}</span>
        <div className="listBox">
            {pageList}
        </div>
      </div>
    )
  }
}
