import React from 'react'
import { Button, List, ListHeader, ListItem } from 'react-onsenui'

export default function ListExample() {
  return (
    <>
      <List>
        <ListHeader>Thumbnails and titles</ListHeader>
          <ListItem>
            <div className="left">
              <img className="list-item__thumbnail" src="https://placekitten.com/g/40/40"/>
            </div>
            <div className="center">
              <span className="list-item__title">Cutest kitty</span><span className="list-item__subtitle">On the Internet</span>
            </div>
          </ListItem>
      </List>
      <List
        dataSource={['Row 1', 'Row 2', 'Jimmy']}
        renderHeader={()=><ListHeader>Thumbnails and titles</ListHeader>}
        renderRow={(row, idx) => (
          <ListItem>
            {row}
            <Button modifier="quiet">Remove</Button>
          </ListItem>
        )}
        renderFooter={()=><ListHeader>Thumbnails and titles</ListHeader>}
      />
  </>
  )
}
