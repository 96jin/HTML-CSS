import React from 'react'
import { SWRConfig, useSWRConfig } from 'swr'
import { Avatar } from './Profile'

function localStorageProvider(){
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || "[]"))
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-cache',appCache)
  })

  return map
}

export default function Cache() {
  return (
    <SWRConfig value={{
      refreshInterval : 1000, 
      // provider: localStorageProvider
      }}>
      <Page/>
    </SWRConfig>
  )
}

const Page = () => {
  const {cache, mutate} = useSWRConfig()
  return (
    <div>
      <Avatar id={1212}/>
      <button onClick={() => {
        mutate('/api/user/1212') // 누르면 해당 통신이 호출됨(업데이트됨), 해당 key값으로 받아온 데이터들 모두 리패치
        console.log(`check: ${JSON.stringify(cache.get('/api/user/1212'))}`)
      }}>check</button>
    </div>
  )
}