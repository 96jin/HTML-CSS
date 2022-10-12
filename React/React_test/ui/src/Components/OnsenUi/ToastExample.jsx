import React, { useState } from 'react'
import { Button, Toast } from 'react-onsenui'

export default function ToastExample() {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(true)
    {setTimeout(() => {
      setOpen(false)
    }, 1000)}
  }

  return (
    <>
      <Button onClick={handleClick}>open</Button>
      <Toast isOpen={open}>hi</Toast>
    </>
  )
}
