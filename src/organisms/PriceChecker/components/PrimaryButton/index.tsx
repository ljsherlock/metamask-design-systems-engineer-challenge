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

interface PrimaryButtonProps extends styleComponentTypes {}

let properties = propertiesObj()
properties.layout = {}
properties.space = {}
properties.typography = {}
properties.style = {
  background: theme.colors.carnation,
  color: theme.colors.white,
  borderColor: theme.colors.carnation,
}
properties.state = {
  ':hover': {
    background: theme.colors.carnation8,
    borderColor: theme.colors.carnation8
  },
  ':active': {
    background: theme.colors.carnation16,
    borderColor: theme.colors.carnation16
  },
}
properties.variants = {}

const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
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
export default StyledComponent(PrimaryButton, 'PrimaryButton')