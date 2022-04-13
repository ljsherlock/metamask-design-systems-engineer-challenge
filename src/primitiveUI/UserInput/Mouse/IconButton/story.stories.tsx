import React, { FunctionComponent } from 'react'
import { withKnobs, select } from "@storybook/addon-knobs"

import IconButton from './index'

import * as icons from '../../../../assets/icons'

interface Props {
  name: string
  story: any
}
export const IconButtonStory: FunctionComponent<Props> = (props) => {
  
  let iconOptions = {}
  Object.keys(icons).forEach(key => {
     iconOptions[key] = key
  })

  const iconVariant = select(
    "Icon", 
    iconOptions,
    'MdClear'
  )
  
  return <IconButton icon={iconVariant}></IconButton>
}

export default {
  title: '3. Components/User Input/Mouse/IconButton',
  component: IconButtonStory,
}

// @ts-ignore
IconButtonStory.story = {
  name: 'IconButton',
  decorators: [ withKnobs ]
}
