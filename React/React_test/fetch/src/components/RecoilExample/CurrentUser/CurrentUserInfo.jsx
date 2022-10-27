import axios from 'axios';
import React from 'react'
import { atom, selector, useRecoilValue, useSetRecoilState, useRecoilState, selectorFamily, useRecoilValueLoadable } from 'recoil';
import ErrorBoundary from './ErrorBoundary';

const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 2,
});

const tableOfUsers = [{name:'jimmy'},{name:'choi'}]

// const currentUserNameState = selector({
//   key: 'CurrentUserName',
//   get: ({get}) => {
//     return tableOfUsers[get(currentUserIDState)].name;
//   },
// });

const currentUserNameQuery = selectorFamily({
  key: 'CurrentUserName',
  get: id => async() => {
    const response = await axios.get(`/api/user-name?id=${id}`)
    return response.data.name
  },
});

function CurrentUser() {
  // const userName = useRecoilValue(currentUserNameQuery(1));
  const userName = useRecoilValueLoadable(currentUserNameQuery(1));

  if(userName.state === 'loading'){
    return <div>loading...</div>
  }
  if(userName.state === 'hasError'){
    return <div>Something wrong</div>
  }

  return (
    <div>
      {userName.contents}
    </div>
  )
}

export default function CurrentUserInfo(){
  return (
  // <ErrorBoundary>
  //   <React.Suspense fallback={<div>Loading...</div>}>
      <CurrentUser/>
  //   </React.Suspense>
  // </ErrorBoundary>
  )
}