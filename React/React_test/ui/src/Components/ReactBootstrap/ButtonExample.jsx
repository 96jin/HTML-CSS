import React from 'react'
import AlertDismissible from './AlertDismissible'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {Button, ButtonGroup, Spinner} from 'react-bootstrap';

export default function ButtonExample() {
  return (
    <div>
      {/* <AlertDismissible/> */}
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>

        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>

      <br />
      <br />

      <ButtonGroup size="lg" className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
      <br />
      <ButtonGroup size="sm">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>

      <br />
      <br />

      <Button variant="primary" disabled>
        <Spinner
          style={{marginRight:10}}
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
          // className='visually-hidden'
        />
        Loading...
      </Button>
    </div>
  )
}
