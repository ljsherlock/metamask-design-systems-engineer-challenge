import React, { FunctionComponent } from 'react'
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Component from './index'

interface Props {
  name: string
  story: any
}

export const Info: FunctionComponent<Props> = (props) => {
  
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
        This is a paragraph of Info. It is long enough so that it cannot be a label.
      </Component>
    </>
  )
}

export default {
  title: 'Primitive/Text/Info',
  component: Info,
}

// @ts-ignore
Info.story = {
  name: 'Info',
  decorators: [ withKnobs ]
}
