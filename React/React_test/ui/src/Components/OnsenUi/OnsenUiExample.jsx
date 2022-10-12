import React from 'react'
import ButtonExample from './ButtonExample'
import { Page } from 'react-onsenui'
import ActionSheetExample from './ActionSheetExample'
import CheckBoxExample from './CheckBoxExample'
import FabExample from './FabExample'
import ListExample from './ListExample'
import ProgressExample from './ProgressExample'
import ToastExample from './ToastExample'
import AlertExample from './AlertExample'

export default function OnsenUiExample() {
  return (
    <div>
      <Page>
        <ToastExample/>
        <ProgressExample/>
        <ListExample/>
        <FabExample/>
        <CheckBoxExample/>
        <ActionSheetExample/>
        <ButtonExample/>
        <AlertExample/>
      </Page>
    </div>
  )
}
