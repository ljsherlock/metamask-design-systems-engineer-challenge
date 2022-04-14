import React, { FunctionComponent } from 'react'

import {
  propertiesObj,
  StyledComponent,
  styleComponentTypes,
} from '../../../utilities/styleUtility'

interface HorizontalLineProps extends styleComponentTypes {}

let properties = propertiesObj()
properties.layout = {}
properties.space = {}
properties.typography = {}
properties.style = {}
properties.state = {}
properties.variants = {}

const HorizontalLine: FunctionComponent<HorizontalLineProps> = ({
  id,
  className,
  children,
  ...props
}) => {
  return (
    <hr
      id={id}
      className={className}
    />
  )
}
export default StyledComponent(HorizontalLine, 'HorizontalLine')