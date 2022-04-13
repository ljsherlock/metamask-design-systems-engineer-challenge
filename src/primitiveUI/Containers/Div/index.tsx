import React, { ReactChild } from 'react'

import { 
	StyledComponent, 
	styleComponentTypes
} from '../../../utilities/styleUtility'

interface Props extends styleComponentTypes {
	className?: string
	id?: string
  children: string | ReactChild
}

const Div: React.FunctionComponent<Props> = ({ 
	id,
	className,
	children,
	...props
}) => {
	return (
		<div
			id={id}
			className={className}
			{...props}
		>
      {children}
    </div>
	)
}

export default StyledComponent(Div, 'Div')