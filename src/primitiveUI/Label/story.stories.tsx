import React, { FunctionComponent } from 'react'
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Component from './index'

interface Props {
  name: string
  story: any
}

export const LabelStory: FunctionComponent<Props> = (props) => {
  
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
      <Component
        id='label'
        variant={variant}
      >
        text
      </Component>
    </>
  )
}

export default {
  title: 'Primitive/Labels/Label',
  component: LabelStory,
}

// @ts-ignore
LabelStory.story = {
  name: 'Label',
  decorators: [ withKnobs ]
}
