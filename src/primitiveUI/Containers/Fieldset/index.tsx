import React, { ReactChild } from 'react'

import { 
	StyledComponent, 
	styleComponentTypes
} from '../../../utilities/styleUtility'

interface FieldSet extends styleComponentTypes {
	className?: string
	id?: string
  children: string | ReactChild
}

const FieldSet: React.FunctionComponent<FieldSet> = ({ 
	id,
	className,
	children,
	...props
}) => {
	return (
		<fieldset
			id={id}
			className={className}
		>
      {children}
    </fieldset>
	)
}

export default StyledComponent(FieldSet, 'FieldSet')