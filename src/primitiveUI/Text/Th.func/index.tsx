import React, { FunctionComponent } from 'react'

import { theme } from '../../../config/styleguide'
import {
  StyledComponent,
  styleComponentTypes,
} from '../../../utilities/styleUtility'


interface Props extends styleComponentTypes {}

const Th: FunctionComponent<Props> = ({
  children: string,
  className,
  ...props
}) => {
  return (
    <th className={className}>
      {string}
    </th>
  )
}
export default StyledComponent(Th, 'Th')
