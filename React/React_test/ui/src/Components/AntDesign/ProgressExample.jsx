import { Progress } from 'antd'
import React from 'react'

export default function ProgressExample() {
  return (
    <>
      <Progress strokeLinecap="butt" percent={75} />
      <Progress strokeLinecap="butt" type="circle" percent={75} />
      <Progress 
      strokeLinecap="butt" 
      type="dashboard" 
      percent={75}
      trailColor='orange'
      status='active'
      />
    </>
  )
}
