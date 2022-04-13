import React, { FunctionComponent } from 'react'
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Button from './index'

interface Props {
  name: string
  story: any
}

export const ButtonStory: FunctionComponent<Props> = (props) => {
  
  const label = text("Label", "lalala");
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
      <Button
        id='label'
        variant={variant}
      >
        click
      </Button>
    </>
  )
}

export default {
  title: 'Primitive/User Events/Button',
  component: ButtonStory,
}

// @ts-ignore
ButtonStory.story = {
  name: 'Button',
  decorators: [ withKnobs ]
}
