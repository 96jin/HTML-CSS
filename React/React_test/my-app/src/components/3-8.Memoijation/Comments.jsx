import React,{useCallback} from 'react'
import CommentItem from './CommentItem'

export default function Comments({commentList}) {
  const handleClick = useCallback(() => {
    console.log('눌림')
  },[])
  return (
    <div>
      {commentList.map( (comment) => 
      (<CommentItem 
      key={comment.title} 
      title={comment.title}
      content={comment.content}
      likes={comment.likes}
      onClick={handleClick}
      />))}
    </div>
  )
  // memo를 썼음에도 새로 항목이 생성될 때 마다 모두 다 새로 그려진다.
  // 그래서 useCallback 을 사용해야한다.
  // useCallback으로 메모이제이션 받았기때문에 handleChange를 새로 리렌더링하지 않는다.
}
