import React, { FunctionComponent } from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Circle from '.'

interface Props {
  name: string
  story: any
}

export const CircleStory: FunctionComponent<Props> = (props) => {

  return (
    <Circle/>
  )
}

export default {
  title: 'Primitive/Containers/Circle',
  component: CircleStory,
}

// @ts-ignore
CircleStory.story = {
  name: 'default',
  decorators: [ withKnobs ]
}
