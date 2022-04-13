import React from 'react'

import { StyledComponent } from '../../../../utilities/styleUtility'

import Input, { InputProps } from '../Input'

export interface TextInputProps extends InputProps {}

export const PasswordInput: React.FunctionComponent<TextInputProps> = ({ 
	type,
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
      type='password'
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
			// all the possible HTML attrs should be listed
			{...props}
		/>
	)
}

export default PasswordInput
