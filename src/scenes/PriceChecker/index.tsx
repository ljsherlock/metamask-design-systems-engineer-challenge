import React, { FunctionComponent } from 'react'

import { theme } from '../../config/styleguide'
import {
  propertiesObj,
  mergeProperties,
  StyledComponent,
  styleComponentTypes,
} from '../../utilities/styleUtility'

import Div from '../../primitiveUI/Containers/Div'

interface PriceCheckerProps extends styleComponentTypes {}

let properties = propertiesObj()
properties.layout = {}
properties.space = {}
properties.typography = {}
properties.style = {}
properties.state = {}
properties.variants = {}

const PriceChecker: FunctionComponent<PriceCheckerProps> = ({
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
export default StyledComponent(PriceChecker, 'PriceChecker')