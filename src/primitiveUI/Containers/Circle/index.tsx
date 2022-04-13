import React, { FunctionComponent } from 'react'

import { theme } from '../../../config/styleguide'
import {
  propertiesObj,
  mergeProperties,
  styleComponentTypes,
} from '../../../utilities/styleUtility'

import Div from '../Div'

interface CircleProps extends styleComponentTypes {}

let properties = propertiesObj()
properties.layout = {
  height: theme.space[1],
  width: theme.space[1],
}
properties.space = {}
properties.typography = {}
properties.style = {
  borderRadius: '100%',
  backgroundColor: theme.colors.black
}
properties.state = {}
properties.variants = {}

const Circle: FunctionComponent<CircleProps> = ({
  children,
  properties: overrides,
  variant,
  ...props
}) => {
  return (
    <Div
      properties={mergeProperties(properties, overrides)}
      variant={variant}
      {...props}
    >
      {children}
    </Div>
  )
}
export default Circle