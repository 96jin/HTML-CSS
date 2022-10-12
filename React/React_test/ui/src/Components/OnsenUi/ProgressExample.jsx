import React from 'react'
import { ProgressBar, ProgressCircular } from 'react-onsenui'

export default function ProgressExample() {
  return (
    <div>
      <ProgressCircular
        modifier='material'
        value='30' 
        secondaryValue='100'
        >
      </ProgressCircular>
      <ProgressCircular value='10' secondaryValue='100'></ProgressCircular>
      <ProgressCircular indeterminate></ProgressCircular>
      <ProgressBar indeterminate></ProgressBar>
    </div>
  )
}
