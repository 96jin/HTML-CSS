import axios from 'axios';
import React from 'react'
import { SWRConfig } from 'swr';
import useSWR from 'swr'

export default function Fetcher() {
  return (
    <SWRConfig value={{
      fetcher: (...args) => axios.get(...args).then((res)=>(res.data))}}>
      <Page/>
    </SWRConfig>
  )
}

const Page = () => {
  // fetcher가 이미 선언되어있으면, 따로 인자로 줄 필요가 없다.
  const { data, error } = useSWR('/api/user/128', {
    onErrorRetry : (error,key, config, revalidate, {retryCount})=>{
    console.dir(JSON.stringify(error))
    if(error.status === 404){
      alert(404)
      return
    }
    if(retryCount > 3){
      return
    }
    setTimeout(() => {
      revalidate({retryCount})
    }, 1000)
  }})

  if(!data) return <div>Loading</div>
  if(error) return <div>error</div>

  return <div>{data.name}</div>
}