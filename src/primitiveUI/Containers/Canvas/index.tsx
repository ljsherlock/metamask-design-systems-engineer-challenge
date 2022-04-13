import React, { FunctionComponent } from 'react'

import { theme } from '../../../config/styleguide'
import {
  StyledComponent,
  styleComponentTypes,
} from '../../../utilities/styleUtility'


interface CanvasProps extends styleComponentTypes {}

const Canvas: FunctionComponent<CanvasProps> = ({
  children,
  variant,
  ...props
}) => {
  return (
    <canvas {...props}>
      {children}
    </canvas>
  )
}
export default StyledComponent(Canvas, 'Canvas')