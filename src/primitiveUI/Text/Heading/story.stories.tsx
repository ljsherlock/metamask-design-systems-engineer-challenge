import React, { FunctionComponent } from 'react'
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Heading from './index'

interface Props {
  name: string
  story: any
}

export const HeadingStory: FunctionComponent<Props> = (props) => {
  
  const label = text("Label", "My Heading");
  const heading = select(
    "Heading", 
    {
      1: 1,
      2: 2,
    }, 
    1
  )
  
  return (
    <>
      <Heading
        heading={heading} variant={heading}
      >
        {label}
      </Heading>
    </>
  )
}

export default {
  title: 'Primitive/Text/Heading',
  component: HeadingStory,
}

// @ts-ignore
Heading.story = {
  name: 'Heading',
  decorators: [ withKnobs ]
}
