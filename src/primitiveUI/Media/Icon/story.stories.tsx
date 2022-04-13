import React, { FunctionComponent } from 'react'
import { withKnobs, select } from "@storybook/addon-knobs";

import Icon from './index'

interface Props {
  name: string
  story: any
}

export const IconStory: FunctionComponent<Props> = (props) => {
  
  const variant = select(
    "Variant", 
    {
      None: '',
      Error: 'error',
    }, 
    'none'
  )
  
  return (
    <>
      <Icon
        variant={variant}
        icon="MdClear"
      />
    </>
  )
}

export default {
  title: 'Primitive/Media/Icon',
  component: IconStory,
}

// @ts-ignore
IconStory.story = {
  name: 'Icon',
  decorators: [ withKnobs ]
}
