import React, { FunctionComponent } from 'react'

import { theme } from '../../../config/styleguide'
import {
  propertiesObj,
  mergeProperties,
  styleComponentTypes,
} from '../../../utilities/styleUtility'

import Div from '../../../primitiveUI/Containers/Div'

interface FullScreenProps extends styleComponentTypes {}

let properties = propertiesObj()
properties.layout = {
  width: '100vw',
  height: '100vh',
}
properties.space = {}
properties.typography = {}
properties.style = {}
properties.state = {}
properties.variants = {}

const FullScreen: FunctionComponent<FullScreenProps> = ({
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
export default FullScreen