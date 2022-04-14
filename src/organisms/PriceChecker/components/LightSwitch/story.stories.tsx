import React, { FunctionComponent } from 'react'
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs'

import LightSwitch from './container'
import Div from '../../../../primitiveUI/Containers/Div'

import { theme } from '../../../../primitiveUI'

interface Props {
  name: string
  story: any
}

export const LightSwitchStory: FunctionComponent<Props> = (props) => {

  const exampleSelect = select(
    'Select',
    {
      moon: 'Moon',
      sun: 'Sun'
    },
    'Moon'
  )

  const variant = select(
    'Light',
    {
      light: 'light',
      dark: 'dark'
    },
    'light'
  )

  return (
    <Div variant='flexbox'margin={theme.space[3]}>
      <LightSwitch icon={exampleSelect} variant={variant}/>
    </Div>
  )
}

export default {
  title: '3. Organisms/Price Checker/Components/User Input/Mouse/Buttons/LightSwitch',
  component: LightSwitchStory,
}

// @ts-ignore
LightSwitchStory.story = {
  name: 'default',
  decorators: [ withKnobs ]
}
