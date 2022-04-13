import React, { FunctionComponent } from 'react'
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Image from './index'

interface Props {
  name: string
  story: any
}

export const ImageStory: FunctionComponent<Props> = (props) => {
  
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
      <Image
        variant={variant}
        src="https://via.placeholder.com/300x200.jpg"
      />
    </>
  )
}

export default {
  title: 'Primitive/Media/Image',
  component: ImageStory,
}

// @ts-ignore
ImageStory.story = {
  name: 'Image',
  decorators: [ withKnobs ]
}
