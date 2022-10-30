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
    postsPerPage : 4,
  }
  const {posts, loading, currentPageNum,postsPerPage} = postList
  const [post, setPost] = useState([])
  const [pageNum, setPageNum] = useState(currentPageNum)
  const [perPage, setPerPage] = useState(postsPerPage)

  const pageFirstIdx = (pageNum - 1)*perPage
  const pageLastIdx = pageNum * perPage
  const firstPosts = posts.slice(pageFirstIdx, pageLastIdx)  
  
  

  useEffect(()=>{
    setPost(firstPosts)
  },[pageNum])



  return (
    <div className="App">
      <main>
        {post.map((post)=><Posts key={post.id} post={post.title} id={post.id}/>)}
      </main>
      <div>
        <PageNum totalLen={Math.ceil(posts.length/perPage)} 
        pageNum={pageNum} setPageNum={setPageNum}
        setPerPage={setPerPage} firstPosts={firstPosts} setPost={setPost} perPage={perPage}/>
      </div>

    </div>
  );
}

export default App;
