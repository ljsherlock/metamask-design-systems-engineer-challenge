import React, { FunctionComponent } from 'react'
import { withKnobs, text, select } from "@storybook/addon-knobs";

import TextInput from './index'

interface Props {
  name: string
  story: any
}

export const EmailInputStory: FunctionComponent<Props> = (props) => {
  
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
  title: 'Primitive/User Input/Email',
  component: EmailInputStory,
}

// @ts-ignore
EmailInputStory.story = {
  name: 'Text Input',
  decorators: [ withKnobs ]
}
