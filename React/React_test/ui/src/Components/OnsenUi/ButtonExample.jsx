import React from 'react'
import { Button } from 'react-onsenui'
export default function ButtonExample() {
  const handleClick = () => {
    alert('pressed')
  }
  return (
    <>              
      <Button onClick={handleClick} modifier="large--cta">Tap Memo</Button>
      <br />
      <br />
      <Button onClick={handleClick} disabled={true}>DISABLED</Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="outline">outline</Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="quiet">quiet</Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="cta">cta</Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="large--quiet">large--quiet</Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="material">material</Button>
      <br />
      <br />
      <Button onClick={handleClick} modifier="material--flat">material--flat</Button>
      <br />
      <br />
      
      

    </>

  )
}
