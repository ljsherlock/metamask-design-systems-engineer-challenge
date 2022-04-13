import React, { FunctionComponent } from 'react'

import { 
	StyledComponent, 
	styleComponentTypes 
} from '../../../utilities/styleUtility'

export interface InfoProps extends styleComponentTypes {
	className?: string
	id?: string
	value?: string
	variant?: string
	variants?: any
	style?: any
}

const Info: FunctionComponent<InfoProps> = ({ 
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

export default StyledComponent(Info, 'Info')