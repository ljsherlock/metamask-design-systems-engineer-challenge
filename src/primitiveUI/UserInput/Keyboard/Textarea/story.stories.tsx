import React, { FunctionComponent } from 'react'
import { withKnobs, select } from "@storybook/addon-knobs";

import Textarea from './index'

interface Props {
  name: string
  story: any
}

export const TextareaStory: FunctionComponent<Props> = (props) => {
  
  const variant = select(
    "Variant", 
    {
      None: '',
      Error: 'error',
    }, 
    'error'
  )
  
  return (
    <>
      <Textarea
        variant={variant}
      />
    </>
  )
}

export default {
  title: 'Primitive/User Input/Textarea',
  component: TextareaStory,
}

// @ts-ignore
TextareaStory.story = {
  name: 'Textarea',
  decorators: [ withKnobs ]
}
