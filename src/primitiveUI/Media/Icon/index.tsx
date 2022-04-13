import React from 'react'

import { 
	StyledComponent, 
	styleComponentTypes
} from '../../../utilities/styleUtility'

import * as Icons from '../../../assets/icons'

interface Props extends styleComponentTypes {
	icon: string
	alt?: string
	className?: string
	id?: string
	onBlur?: (e) => void
	onFocus?: (e) => void
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

// Although this is extending a reactComponent (icon), 
// StyledComponent is still required to pass styles.
export default StyledComponent(Icon, 'Icon')