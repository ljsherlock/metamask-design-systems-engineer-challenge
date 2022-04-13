import React from 'react'

import { StyledComponent } from '../../../../utilities/styleUtility'

import Input, { InputProps } from '../Input'

export interface TextInputProps extends InputProps {}

export const EmailInput: React.FunctionComponent<TextInputProps> = ({ 
	placeholder,
	name,
	id,
	className,
	value,
	onChange,
	onBlur,
	onKeyDown,
	autoComplete,
	readOnly,
	...props
}) => {
	return (
		<Input
      type='email'
			placeholder={placeholder}
			name={name}
			id={id}
			className={className}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
			onKeyDown={onKeyDown}
			autoComplete={autoComplete}
			readOnly={readOnly}
			{...props}
		/>
	)
}

export default EmailInput
