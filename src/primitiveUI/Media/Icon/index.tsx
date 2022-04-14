import React from 'react'

import { 
	StyledComponent, 
	styleComponentTypes
} from '../../../utilities/styleUtility'

import Icons from '../../../assets/icons'

interface Props extends styleComponentTypes {
	icon: string
	alt?: string
	className?: string
	id?: string
	onBlur?: any
	onFocus?: any
	variant?: string
	style?: any
}

const Icon: React.FunctionComponent<Props> = ({ 
	id,
	className,
	icon,
	alt,
	...props
}) => {
	const Icon = Icons[icon]

	return (
		<Icon
			className={className}
			id={id}
			alt={alt}
			{...props}
		/>
	)
}

// Although this is extending a reactComponent (svg)), 
// StyledComponent is still required to pass styles.
export default StyledComponent(Icon, 'Icon')