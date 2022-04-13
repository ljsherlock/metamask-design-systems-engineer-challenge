import React, { FunctionComponent } from 'react'
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs'

import PriceChecker from '.'

interface Props {
  name: string
  story: any
}

export const PriceCheckerStory: FunctionComponent<Props> = (props) => {

  const exampleText = text(
    'Text',
    null
  )
  const exampleBoolean = boolean(
    'Boolean',
    false
  )
  const exampleSelect = select(
    'Select',
    {
      exmaple: 'example'
    },
    'example'
  )

  return (
    <PriceChecker/>
  )
}

export default {
  title: 'Components/PriceChecker/price',
  component: PriceCheckerStory,
}

// @ts-ignore
PriceCheckerStory.story = {
  name: 'default',
  decorators: [ withKnobs ]
}
