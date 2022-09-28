import React, {useState} from 'react'

export default function ControlledComponent() {
  const [value, setValue] = React.useState('')
  const [essay, setEssay] = React.useState('Please write about essay about your favorite DOM element')
  const [flavor, setFlavor] = React.useState('coconut')
  function handleChange(event){
    // synsethic value 안에 name과 type이 들어와서 name과 type으로 분류 가능하다.
    const name = event.target.name
    if(name==='value'){
      setValue(event.target.value)
    }
    if(name==='essay'){
      setEssay(event.target.value)
    }
    if(name==='flavor'){
      setFlavor(event.target.value)
    }
  }
  // function handleEssayChange(event){
  //   setEssay(event.target.value)
  // }
  
  // function handleFlavorChange(event){
  //   setFlavor(event.target.value)
  // }
  function handleSubmit(event){
    alert(`value: ${value}, essay: ${essay}, flavor: ${flavor}`)
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="value" type="text" value={value} onChange={handleChange} />   
      </label>
      <br/>
      <br/>
      <label>
        Essay:
        <textarea name="essay" value={essay} onChange={handleChange}></textarea>
      </label>
      <br/>
      <br/>
      <label>
        Pick your favorite flavor:
        <select name="flavor" value={flavor} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
