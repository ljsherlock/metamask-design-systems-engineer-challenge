import React, { FunctionComponent } from 'react'

import { theme } from '../../../config/styleguide'
import {
  propertiesObj,
  mergeProperties,
  styleComponentTypes,
} from '../../../utilities/styleUtility'

import Div from '../../../primitiveUI/Containers/Div'

interface Props extends styleComponentTypes {
  contentArray: any
  activeContent: string
}

let properties = propertiesObj()
properties.layout = {}
properties.space = {}
properties.typography = {}
properties.style = {}
properties.state = {}
properties.variants = {}

const SwitchedContent: FunctionComponent<Props> = ({
  children,
  properties: overrides,
  variant,
  contentArray,
  activeContent,
  ...props
}) => {

  let child = ''
  
  Object.keys(contentArray).map(item => {
    if (item === activeContent) {
      child = item
    }
  })
  return (
    <Div
      properties={mergeProperties(properties, overrides)} 
      variant={variant}
      {...props}
    >
      {contentArray[child]}
    </Div>
  )
}
export default SwitchedContent