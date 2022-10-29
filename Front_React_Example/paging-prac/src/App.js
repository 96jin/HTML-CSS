import { useState, useEffect } from 'react';
import './App.css';
import Posts from './components/Posts';
import PageNum from './components/PageNum';

function App() {
  const postList = {
    posts : [
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
      {id:13,title:'Post13'},
      {id:14,title:'Post14'},
    ],
    loading : false,
    currentPageNum : 1,
    postsPerPage : 3,
  }
  const {posts, loading, currentPageNum,postsPerPage} = postList
  const [pageNum, setPageNum] = useState(currentPageNum)

  const pageFirstIdx = (pageNum - 1)*postsPerPage
  const pageLastIdx = pageNum * postsPerPage
  const firstPosts = posts.slice(pageFirstIdx, pageLastIdx)  
  
  const [post, setPost] = useState(firstPosts)
  console.log(post)

  useEffect(()=>{
    setPost(firstPosts)
  },[pageNum])



  return (
    <div className="App">
      <div style={{minHeight:200}}>
        {post.map((post)=><Posts key={post.id} post={post.title} id={post.id}/>)}
      </div>
      <div>
        <PageNum totalLen={Math.ceil(posts.length/postsPerPage)} 
        pageNum={pageNum} setPageNum={setPageNum}/>
      </div>

    </div>
  );
}

export default App;
