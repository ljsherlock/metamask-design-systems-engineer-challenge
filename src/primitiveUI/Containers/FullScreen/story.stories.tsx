import React, { FunctionComponent } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import FullScreen from '.'

interface Props {
  name: string
  story: any
}

export const FullScreenStory: FunctionComponent<Props> = (props) => {

  return (
    <FullScreen backgroundColor='shamrock' />
  )
}

export default {
  title: 'Primitive/Containers/FullScreen',
  component: FullScreenStory,
}
// @ts-ignore
FullScreenStory.story = {
  name: 'default',
  decorators: [ withKnobs ]
}
