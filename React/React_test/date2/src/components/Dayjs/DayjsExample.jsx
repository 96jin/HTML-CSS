import React, { useRef, useState } from 'react'
import moment from 'moment-timezone'
import 'moment/locale/ko'

import dayjs from 'dayjs'
import 'dayjs/locale/ko'

import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.locale('ko')
// dayjs 는 한국어로 쓰려면 import 하고 locale 설정을 해줘야한다.

dayjs.extend(utc)
dayjs.extend(timezone)
// dayjs 에서 timezone 쓰려면 plugin 에서 import하고 extend 도 해야한다.

export default function DayjsExample() {
  const dayjsDate = dayjs()
  const newDayjsDate = dayjsDate.add(1, 'week') 
  // dayjs 는 immutable 이므로 dayjsDate.add 메서드를 사용해도 dayjsDate의 값은 변하지않고 더해진 값이 newDayjsDate에 들어간다.
  // add 하는거는 moment와 같다.
  // moment 에서는 시간과 timezone 을 설정한 그대로 두고 계산한다. 
  // dayjs 에서는 시간은 그대로 비교하고 timezone을 사용자 timezone으로 자동으로 계산한다.

  const cloneNewDayjsDate = newDayjsDate.add(1,'week')
  

  const birthDayRef = useRef(null)
  const [day , setDay] = useState('')
  const handleBirthDayChange = (e) => {
    setDay(dayjs(e.target.value, "YYYY-MM-DD").format('dddd'))
  }

  return (
    <div>
      <h1>Day.js</h1>
      <div>Immutable Check</div>
      <div>
        {dayjsDate.format()}
        <br />
        {newDayjsDate.format()}
        <br />
        {cloneNewDayjsDate.format()}
      </div>
      <br />
      <div>Summer Time (New-york)</div>
      <div>{dayjs.tz.guess({})}</div>
      <div>2018년 3월 10일 13시에 하루 더하기 : 
        {dayjs.tz('2018-03-10 13:00:00', 'America/New_York').add(1,'day').format()}</div>
      <div>2018년 3월 10일 13시에 24시간 더하기 : 
        {dayjs.tz('2018-03-10 13:00:00', 'America/New_York').add(24,'hour').format()}</div>
        
        <br />

      <div>Leap Year (Korea)</div>
      <div>2017년 1월 1일에 1년 더하기 (윤년) : 
        {moment.tz('2017-01-01', 'Asia/Seoul').add(1,'year').format()}</div>
      <div>2017년 1월 1일에 365일 빼기 : 
        {moment.tz('2017-01-01', 'Asia/Seoul').subtract(365,'day').format()}</div>
      
      <br />

      <div>한국어로 표기 07-17-2021을 2021년 7월 17일로 표기</div>
      <div>{dayjs('2021-07-17').format('YYYY년 M월 D일')}</div>
      
      <br />

      <div>자기 생일 요일 찾기</div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
        <div>무슨 요일이었을까?</div>
        <div>{day}</div>
      </div>
      
      <br />

    <div>두 날짜 비교</div>
    <div>2021-07-17 03:00 와 2021-07-18 02:00 는 몇시간 차이인가?</div>
    <div>{dayjs('2021-07-17 03:00').diff(dayjs('2021-07-18 02:00'),"hours")}시간</div>
    </div>
  )
  // diff 를 사용할때 단위도 적어준다. default : ms
}
