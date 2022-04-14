import React, { FunctionComponent } from 'react'
import { withKnobs, select } from "@storybook/addon-knobs"

import IconButton from './index'

import icons from '../../../../assets/icons'

interface Props {
  name: string
  story: any
}
export const IconButtonStory: FunctionComponent<Props> = (props) => {
  
  let iconOptions: any = {}
  Object.keys(icons).forEach(key => {
     iconOptions[key] = key
  })

  const iconVariant = select(
    "Icon", 
    iconOptions,
    'Sun'
  )
  
  return <IconButton icon={iconVariant}></IconButton>
}

export default {
  title: '2. Primitive Components/User Input/Mouse/IconButton',
  component: IconButtonStory,
}

// @ts-ignore
IconButtonStory.story = {
  name: 'IconButton',
  decorators: [ withKnobs ]
}
