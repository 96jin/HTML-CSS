import React from 'react'
import { Checkbox, List, ListItem } from 'react-onsenui'

export default function CheckBoxExample() {
  return (
    <List>
    <ListItem tappable>
      <label className="left">
        <Checkbox input-id="check-1"></Checkbox>
      </label>
      <label htmlFor="check-1" className="center">
        Apple
      </label>
    </ListItem>
    <ListItem tappable>
      <label className="left">
        <Checkbox input-id="check-2" checked={true}></Checkbox>
      </label>
      <label htmlFor="check-2" className="center">
        Banana
      </label>
    </ListItem>
  </List>
  )
}
