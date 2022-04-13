import React, { FunctionComponent } from 'react'

import { 
	StyledComponent,
	styleComponentTypes
} from '../../utilities/styleUtility'

interface LabelProps extends styleComponentTypes {
	className?: string
	id?: string
	htmlFor?: string
	variant?: string
}

const Label: FunctionComponent<LabelProps> = ({ 
	id,
	className,
	htmlFor,
	children,
	...props
}) => {
	return (
		<label
			htmlFor={htmlFor}
			id={id}
			className={className}
			{...props}
		>
      {children}
    </label>
	)
}

export default StyledComponent(Label, 'Label')