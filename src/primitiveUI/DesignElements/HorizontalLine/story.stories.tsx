import React, { FunctionComponent } from 'react'
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs'

import HorizontalLine from '.'

interface Props {
  name: string
  story: any
}

export const HorizontalLineStory: FunctionComponent<Props> = (props) => {
  return (
    <HorizontalLine/>
  )
}

export default {
  title: 'Components/Design Elements/Horizontal Line',
  component: HorizontalLineStory,
}

// @ts-ignore
HorizontalLineStory.story = {
  name: 'default',
  decorators: [ withKnobs ]
}
