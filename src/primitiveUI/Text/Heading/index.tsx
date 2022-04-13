import React, { FunctionComponent } from 'react'

import {
	StyledComponent,
	styleComponentTypes 
} from '../../../utilities/styleUtility'

interface Props extends styleComponentTypes {
	className?: string
	id?: string
	value?: string
	variant?: string
	variants?: any
	style?: any
	level: string
}

const Heading: FunctionComponent<Props> = ({ 
	id,
	className,
	children,
	level = 1
}) => {
	return (
		React.createElement(
			`h${level}`,
			{
				id: id,
				className: className,
			},
			children
		)
	)
}

export default StyledComponent(Heading, 'Text')