import React from 'react'

import { 
	StyledComponent, 
	styleComponentTypes 
} from '../../../utilities/styleUtility'

interface Props extends styleComponentTypes {
	src: string
	alt?: string
	className?: string
	id?: string
	onBlur?: (e) => void
	onFocus?: (e) => void
	variant?: string
	variants?: any
	style?: any
}

export const Image: React.FunctionComponent<Props> = ({ 
	id,
	className,
	onBlur,
	onFocus,
	src,
	alt,
}) => {
	return (
		<img
			src={src}
			alt={alt}
			id={id}
			className={className}
			onBlur={onBlur}
			onFocus={onFocus}
		/>
	)
}

export default StyledComponent(Image, 'Image')