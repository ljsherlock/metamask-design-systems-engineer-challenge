import React, { FunctionComponent } from 'react'

import { theme } from '../../../../../config/styleguide'
import {
	propertiesObj,
	mergeProperties,
	StyledComponent,
	styleComponentTypes,
} from '../../../../../utilities/styleUtility'

import Copy from '../../../../../primitiveUI/Text/Copy'

interface InfoProps extends styleComponentTypes {}

let properties = propertiesObj()
properties.layout = {}
properties.space = {
	margin: '0'
}
properties.typography = {
	fontSize: theme.fontSizes[0]
}
properties.style = {
	color: theme.colors.timberGreen
}
properties.state = {}
properties.variants = {
	dark: {
		color: theme.darkTheme.body
	}
}

const Info: FunctionComponent<InfoProps> = ({
	children,
	properties: overrides,
	variant,
	...props
}) => {
	return (
		<Copy
			properties={overrides ? mergeProperties(properties, overrides) : properties}
			variant={variant}
			{...props}
		>
			{children}
		</Copy>
	)
}
export default StyledComponent(Info, 'Text')