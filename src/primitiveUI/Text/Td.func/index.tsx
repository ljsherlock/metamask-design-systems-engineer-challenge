import React, { FunctionComponent } from 'react'

import { theme } from '../../../config/styleguide'
import {
  StyledComponent,
  styleComponentTypes,
} from '../../../utilities/styleUtility'

interface Props extends styleComponentTypes {}

const Td: FunctionComponent<Props> = ({
  children: string,
  className,
  ...props
}) => {
  return (
    <td className={className}>
      {string}
    </td>
  )
}
export default StyledComponent(Td, 'Td')