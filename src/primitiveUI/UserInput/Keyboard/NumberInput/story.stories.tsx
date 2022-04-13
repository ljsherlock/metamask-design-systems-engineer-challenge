import React, { FunctionComponent } from 'react'
import { withKnobs, text, select } from "@storybook/addon-knobs";

import TextInput from './index'

interface Props {
  name: string
  story: any
}

export const TextInputStory: FunctionComponent<Props> = (props) => {
  
  const label = text("Label", "lalala");
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
      <TextInput
        variant={variant}
        id='label'
      />
    </>
  )
}

export default {
  title: 'Primitive/User Input/Text',
  component: TextInputStory,
}

// @ts-ignore
TextInputStory.story = {
  name: 'Text Input',
  decorators: [ withKnobs ]
}
