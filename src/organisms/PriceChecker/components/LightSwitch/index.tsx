import React, { FunctionComponent } from 'react'

import { theme } from '../../../../config/styleguide'
import {
  propertiesObj,
  mergeProperties,
  StyledComponent,
  styleComponentTypes,
} from '../../../../utilities/styleUtility'

import IconButton from '../../../../components/UserInput/Mouse/IconButton'

interface LightSwitchProps extends styleComponentTypes {
  icon: string
}

let properties = propertiesObj()
properties.layout = {
  width: '16px',
  height: '16px',
}
properties.space = {
  padding: theme.space[0]
}
properties.typography = {}
properties.style = {
  border: '0 none',
  'svg': {
    fill: theme.colors.timberGreen
  }
}
properties.state = {}
properties.variants = {
  dark: {
    'svg': {
      fill: theme.darkTheme.body
    }
  }
}

const LightSwitch: FunctionComponent<LightSwitchProps> = ({
  children,
  properties: overrides,
  variant,
  icon,
  ...props
}) => {
  return (
    <IconButton
      properties={overrides ? mergeProperties(properties, overrides) : properties}
      variant={variant}
      icon={icon}
      {...props}
    >
      {children}
    </IconButton>
  )
}
export default StyledComponent(LightSwitch, 'LightSwitch');