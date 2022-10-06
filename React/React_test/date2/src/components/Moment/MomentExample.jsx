import React, { useRef, useState } from 'react'
import moment from 'moment-timezone'
import 'moment/locale/ko'
export default function MomoentExample() {
  const momentDate = moment()
  const newMomentDate = momentDate.add(1, 'week') 
  // momentDate에서 일주일 x 1 을 더한다.
  // momentDate에다가 1주일을 더했으므로 momentDate도 변하고, newMomentDate도 그와 같은 값이된다.
  // -> Moment 는 Mutable이다 (변하는 값이다)

  const cloneNewMomentDate = newMomentDate.clone().add(1,'week')
  // newMomentDate의 clone 에다가 1주일을 더했으므로 newMomentDate 자체는 변하지 않는다.
  // newMomentDate에서 1주일 더한 값이 cloneNewMomentDate에 들어간다.

  // moment() 형식에다가 .format() 를 해주어야 시간이 제대로 보인다.
  // moment() <- 괄호 안에다가 시간 기준을 입력해주면 그 시간으로 계산, default는 현재시간
  // moment().add(1,'day') : 1*day 만큼 더한다
  // moment().subtract(1,'day') : 1*day 만큼 뺀다

  const birthDayRef = useRef(null)
  const [day , setDay] = useState('')
  const handleBirthDayChange = (e) => {
    setDay(moment(e.target.value, "YYYY-MM-DD").format('dddd'))
  }

  return (
    <div>
      <h1>Moment</h1>
      <div>Immutable Check</div>
      <div>
        {momentDate.format()}
        <br />
        {newMomentDate.format()}
        <br />
        {cloneNewMomentDate.format()}
      </div>
      <br />
      <div>Summer Time (New-york)</div>
      <div>2018년 3월 10일 13시에 하루 더하기 : 
        {moment.tz('2018-03-10 13:00:00', 'America/New_York').add(1,'day').format()}</div>
      <div>2018년 3월 10일 13시에 24시간 더하기 : 
        {moment.tz('2018-03-10 13:00:00', 'America/New_York').add(24,'hour').format()}</div>
        
        <br />

      <div>Leap Year (Korea)</div>
      <div>2017년 1월 1일에 1년 더하기 (윤년) : 
        {/* {console.log(moment.tz.names('Asia'))} */}
        {moment.tz('2017-01-01', 'Asia/Seoul').add(1,'year').format()}</div>
      <div>2017년 1월 1일에 365일 빼기 : 
        {moment.tz('2017-01-01', 'Asia/Seoul').subtract(365,'day').format()}</div>
      
      <br />

      <div>한국어로 표기 07-17-2021을 2021년 7월 17일로 표기</div>
      <div>{moment('2021-07-17').format('YYYY년 M월 D일')}</div>
      
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
    <div>{moment('2021-07-17 03:00').diff(moment('2021-07-18 02:00'),"hours")}시간</div>
    </div>
  )
  // diff 를 사용할때 단위도 적어준다. default : ms
}
