import React, { FunctionComponent } from 'react'

import { theme } from '../../../../config/styleguide'
import {
  propertiesObj,
  mergeProperties,
  StyledComponent,
  styleComponentTypesType,
  styleComponentProperties,
} from '../../../../utilities/styleUtility'

import Div from '../../../../primitiveUI/Containers/Div'

interface PriceCheckerContainerProps extends styleComponentTypesType {}

let properties = propertiesObj()
properties.layout = {
  width: '264px', // theme.measure[],
  height: '189px', // theme.measure[],
}
properties.space = {}
properties.typography = {}
properties.style = {
  border: theme.border[1],
  borderColor: theme.colors.wildSand,
}
properties.variants = {
  dark: {
    borderColor: theme.darkTheme.background,
    background: theme.darkTheme.background
  }
}
properties.state = {}

const PriceCheckerContainer: FunctionComponent<PriceCheckerContainerProps> = ({
  children,
  properties: overrides,
  variant,
  ...props
}) => {
  return (
    <Div
      properties={overrides ? mergeProperties(properties, overrides) : properties}
      variant={variant}
      {...props}
    >
      {children}
    </Div>
  )
}
export default StyledComponent(PriceCheckerContainer, 'Div')