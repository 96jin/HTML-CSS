import React, { Component } from 'react'

export default class Posts extends Component {
  constructor(props){
    super(props)
    this.state={
      loading : this.props.loading,
      posts : this.props.posts,
    }
  }
  
  render() {

    const {loading,posts} = this.props

    return (
      <div className="Posts">
        {
          loading && 
          <div>loading...</div>
        }
        <ul>
          {
            posts.map((post) => (
              <li key={post.id}>
                {post.title}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
