import React, { FunctionComponent } from 'react'
import {
  withKnobs,
  select,
} from '@storybook/addon-knobs'

import { theme } from '../../../../config/styleguide'
import {
  propertiesObj,
} from '../../../../utilities/styleUtility'

import PricePickerContainer from '.'

interface Props {
  name: string
  story: any
}

export const PricePickerContainerStory: FunctionComponent<Props> = (props) => {

  const state = select(
    'Select',
    {
      dark: 'dark',
      light: 'light'
    },
    'Moon'
  )

  let overrides = propertiesObj();
  overrides.space = {
    margin: theme.space[3]
  }
  
  return (
    <PricePickerContainer variant={state} overrides={overrides}/>
  )
}

export default {
  title: '3. Organisms/Price Checker/Components/Container',
  component: PricePickerContainerStory,
}

// @ts-ignore
PricePickerContainerStory.story = {
  name: 'default',
  decorators: [ withKnobs ]
}
