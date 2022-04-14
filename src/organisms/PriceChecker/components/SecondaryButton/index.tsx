import React, { FunctionComponent } from 'react'

import { theme } from '../../../../config/styleguide'
import {
  propertiesObj,
  mergeProperties,
  StyledComponent,
  styleComponentTypes,
} from '../../../../utilities/styleUtility'

import Button from '../../../../primitiveUI/UserInput/Mouse/Button'
import { color } from '@storybook/addon-knobs'

interface SecondaryButtonProps extends styleComponentTypes {}

let properties = propertiesObj()
properties.layout = {}
properties.space = {}
properties.typography = {}
properties.style = {
  color: theme.colors.carnation,
  borderColor: theme.colors.carnation,
}
properties.state = {}
properties.variants = {}

const SecondaryButton: FunctionComponent<SecondaryButtonProps> = ({
  children,
  properties: overrides,
  variant,
  ...props
}) => {
  return (
    <Button
      properties={overrides ? mergeProperties(properties, overrides) : properties}
      variant={variant}
      {...props}
    >
      {children}
    </Button>
  )
}
export default StyledComponent(SecondaryButton, 'SecondaryButton')