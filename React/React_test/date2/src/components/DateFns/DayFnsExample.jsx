import React, { useRef, useState } from 'react'
// momoent
import moment from 'moment-timezone'
import 'moment/locale/ko'

// dayjs
import dayjs from 'dayjs'
import 'dayjs/locale/ko'

import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

// day-fns
import {add , addWeeks, differenceInHours, format, sub} from 'date-fns'
import {ko} from 'date-fns/locale'
// 한국어도 import 해줘야한다.

// 다시 dayjs
dayjs.locale('ko')
// dayjs 는 한국어로 쓰려면 import 하고 locale 설정을 해줘야한다.

dayjs.extend(utc)
dayjs.extend(timezone)
// dayjs 에서 timezone 쓰려면 plugin 에서 import하고 extend 도 해야한다.


export default function DayFnsExample() {

// date-fns 는 함수형이라서 import 대신 Date함수를 써주고, 나머지들을 import해준다.
// 화면에 나타낼때 format으로 감싸고, 뒤에 형식을 지정해줘야한다. y와 d는 소문자를 사용
// week 를 더해줄 때 addWeeks 만 import 해서 사용 가능
const dateFnsDate = new Date()
const newDateFnsDate = add(dateFnsDate, {weeks : 1})
const cloneNewDateFnsDate = addWeeks(newDateFnsDate, 1)


  const birthDayRef = useRef(null)
  const [day , setDay] = useState('')
  const handleBirthDayChange = (e) => {
    setDay(format(new Date(e.target.value), "EEEE", {locale : ko}))
  }

  return (
    <div>
      <h1>Day.js</h1>
      <div>Immutable Check</div>
      <div>
        {format(dateFnsDate,"yyyy-MM-dd")}
        <br />
        {format(newDateFnsDate,"yyyy-MM-dd")}
        <br />
        {format(cloneNewDateFnsDate,"yyyy-MM-dd")}
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
      <div>2017년 1월 1일에 1년 빼기 (윤년) : 
        {format(sub(new Date('2017-01-01') ,{years : 1}),'yyyy-MM-dd')}</div>
      <div>2017년 1월 1일에 365일 더하기 : 
        {format(add(new Date('2017-01-01') ,{days : 365}),'yyyy-MM-dd')}</div>
      
      <br />

      <div>한국어로 표기 07-17-2021을 2021년 7월 17일로 표기</div>
      <div>{format(new Date('2021-07-17'), 'yyyy년 MM월 dd일')}</div>
      
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
    <div>{differenceInHours(new Date('2021-07-17 03:00'), (new Date('2021-07-18 02:00')))}시간</div>
    </div>
  )
  
  // diff 를 사용할때 단위도 적어준다. default : ms
}
