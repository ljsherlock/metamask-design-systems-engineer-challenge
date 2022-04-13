import React, { FunctionComponent } from 'react'

import { 
	StyledComponent, 
	styleComponentTypes 
} from '../../../utilities/styleUtility'

export interface CopyProps extends styleComponentTypes {
	className?: string
	id?: string
	value?: string
	variant?: string
	variants?: any
	style?: any
}

const Copy: FunctionComponent<CopyProps> = ({ 
	id,
	className,
  children
}) => {
	return (
		<p
			id={id}
			className={className}
		>
      {children}
    </p>
	)
}

export default StyledComponent(Copy, 'Text')