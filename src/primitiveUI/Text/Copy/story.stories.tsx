import React, { FunctionComponent } from 'react'
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Component from './index'

interface Props {
  name: string
  story: any
}

export const Copy: FunctionComponent<Props> = (props) => {
  
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
        This is a paragraph of copy. It is long enough so that it cannot be a label.
      </Component>
    </>
  )
}

export default {
  title: 'Primitive/Text/Paragraph',
  component: Copy,
}

// @ts-ignore
Copy.story = {
  name: 'Copy',
  decorators: [ withKnobs ]
}
