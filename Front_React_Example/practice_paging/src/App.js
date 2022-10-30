import { useEffect, useState } from 'react';
import './App.css';
import PageNumber from './components/PageNumber';
import Posts from './components/Posts';

function App() {
  const postInfo = {
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
    ],
    loading : false,
    currentPage : 1,
    postsPerPage : 3,
  }
  const {posts, loading , currentPage, postsPerPage} = postInfo
  
  const [postList, setPostList] = useState([])
  const [pageNum, setPageNum] = useState(currentPage)
  
  const totalLen = Math.ceil(posts.length/postsPerPage)

  useEffect(()=>{
    const totalPosts = posts.map((data) => data.title)
    const firstIdx = (pageNum-1) * postsPerPage
    const lastIdx = firstIdx + postsPerPage
    const newCurrentPosts = totalPosts.slice(firstIdx,lastIdx)
    setPostList(newCurrentPosts)
    console.log(pageNum)
  },[pageNum])  

  return (
    <>
      <div className="App" style={{minHeight:200, marginTop:20}}>
        {postList.map((data,i)=><Posts key={i} data={data}/>)}
      </div>
      <div style={{textAlign:'center'}}>
        <PageNumber setPageNum={setPageNum} totalLen={totalLen} pageNum={pageNum}/>
      </div>
    </>
  );
}

export default App;
