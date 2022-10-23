import './App.css';
import axios from 'axios'
import { useRef, useState } from 'react';

function App() {
  const [inputValue1, setInputValue1] = useState('')
  const [inputValue2, setInputValue2] = useState('')
  const [inputValue3, setInputValue3] = useState('')
  const [car, setCar] = useState([])
  const inputRef = useRef()

  const handleChange1 = (e) => {
    setInputValue1(e.target.value)
  }
  const handleChange2 = (e) => {
    setInputValue2(e.target.value)
  }
  const handleChange3 = (e) => {
    setInputValue3(e.target.value)
  }
  
  // async ~ await : 데이터 비동기 처리
  // Promise 객체~
  const selectAll = async() => {
    const result = await axios.get('/cars')
    console.log(result) // result는 Object 객체(통신관련 설정값 + 데이터)
    setCar(result.data)
  }
  const selectWhere = async() => {
    const result = await axios.get('/cars/'+`${inputValue1}`)
    console.log(result)
    setInputValue1('')
    inputRef.current.focus()
    setCar(result.data)
  }
  const addData = async() => {
    const addObj = {model:`${inputValue1}`,provider:`${inputValue2}`,price:`${inputValue3}`}
    const result = await axios.post('/cars',addObj)
    console.log([...car,addObj])
    setCar([...car,addObj])

  }
  const updateData = async() => {
    const updateObj = {model:`${inputValue1}`, price:`${inputValue3}`}
    await axios.put('/cars',updateObj)
    alert('수정 완료')
    
  }
  const deleteData = async() => {
    const deleteObj = {model:`${inputValue1}`}
    const result = await axios.delete('/cars',{data:deleteObj})
    const newCars = car.filter((cars)=> cars.model !== deleteObj.model)
    console.log(newCars)
    setCar(newCars)
  }
  return (

    <div className="App">차량검색
      <h1>react-express-mysql</h1>
      <button onClick={selectAll}>모두 조회</button>
      <br />

      <input value={inputValue1} type="text" placeholder='모델명 입력'
        onChange={handleChange1} ref={inputRef} />
      <input value={inputValue2} type="text" placeholder='제조사'
        onChange={handleChange2}/>
      <input value={inputValue3} type="text" placeholder='가격' 
        onChange={handleChange3}/>
      <button onClick={selectWhere}>조건 조회</button>
      <button onClick={addData}>추가</button>
      <button onClick={updateData}>수정</button>
      <button onClick={deleteData}>삭제</button>
      <br />
      {car.map((cars)=>(
      <>
      <div>{cars.model} {cars.provider} {cars.price}</div>
      </>))}
    </div>
  );
}

export default App;
