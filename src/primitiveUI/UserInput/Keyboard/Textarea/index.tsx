import React from 'react'

import { 
	StyledComponent, 
	styleComponentTypes 
} from '../../../../utilities/styleUtility'

interface Props extends styleComponentTypes {
	name?: string
	className?: string
	id?: string
	value?: string
	placeholder?: string
	onChange?: (e) => void
	onKeyDown?: (e) => void
	onBlur?: (e) => void
	minLength?: string
	inputRef?: () => void
	autoFocus?: boolean // Automatically focus the form control when the page is loaded
	disabled?: boolean
	variant?: string
	properties?: any
	autoComplete?: string
	readOnly?: boolean
}

export const Textarea: React.FunctionComponent<Props> = ({ 
	name,
	id,
	className,
	value,
	placeholder,
	onChange,
	onBlur,
	onKeyDown,
	autoComplete,
	readOnly,
	required,
}) => {
	return (
		<textarea
			name={name}
			id={id}
			className={className}
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
			onKeyDown={onKeyDown}
			autoComplete={autoComplete}
			readOnly={readOnly}
			required={required}
			// all the possible HTML attrs should be listed
		>
			{value}
		</textarea>
	)
}

export default StyledComponent(Textarea, 'textInput')
