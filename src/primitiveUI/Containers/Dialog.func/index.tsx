import React, { FunctionComponent } from 'react'

import {
  propertiesObj,
  mergeProperties,
  StyledComponent,
  styleComponentTypes,
} from '../../../utilities/styleUtility'

import Div from '../../../primitiveUI/Containers/Div'

interface Props extends styleComponentTypes {
}

let properties = propertiesObj()
properties.layout = {
  display: 'none',
  position: 'fixed',
  zIndex: 50,
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
}
properties.space = {}
properties.typography = {}
properties.style = {}
properties.state = {}
properties.variants = {
  visible: {
    display: 'block'
  }
}

const Dialog: FunctionComponent<Props> = ({
  children,
  variant,
  properties: override,
  ...props
}) => {
  return (
    <Div 
      properties={mergeProperties(properties, override)} 
      variant={variant} 
      {...props}
    >
      {children}
    </Div>
    
  )
}
export default Dialog