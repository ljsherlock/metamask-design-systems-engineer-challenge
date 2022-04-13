import React from 'react'

import { 
	StyledComponent, 
	styleComponentTypes 
} from '../../../../utilities/styleUtility'

export interface InputProps extends styleComponentTypes {
	type?: 'text' | 'email' | 'number'
	name?: string
	placeholder?: string
	className?: string
	id?: string
	value?: string
	onChange?: (e) => void
	onKeyDown?: (e) => void
	onBlur?: (e) => void
	minLength?: string
	inputRef?: () => void
	autoFocus?: boolean // Automatically focus the form control when the page is loaded
	disabled?: boolean
	properties?: any
	autoComplete?: string
	readOnly?: boolean
}

export const Input: React.FunctionComponent<InputProps> = ({ 
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
}) => {
	return (
		<input
			placeholder={placeholder}
			type={type}
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
		/>
	)
}

export default StyledComponent(Input, 'Input')

/**
:enabled	Any currently enabled element that can be activated (selected, clicked on, typed into, etc.) or accept focus and also has a disabled state, in which it can't be activated or accept focus.

:disabled	Any currently disabled element that has an enabled state, meaing it otherwise could be activated (selected, clicked on, typed into, etc.) or accept focus were it not disabled.

:read-only	Element not editable by the user

:read-write	Element that is editable by the user.

:placeholder-shown	Element that is currently displaying placeholder text, including input elements with the placeholder attribute present that has, as of yet, no value.

:default	Form elements that are the default in a group of related elements. Matches checkbox and radio input types that were checked on page load or render.

:checked	Matches checkbox and radio input types that are currently checked (and the (<option> in a <select> that is currently selected).

:indeterminate	checkbox elements whose indeterminate property is set to true by JavaScript, radio elements, when all radio buttons with the same name value in the form are unchecked, and <progress> elements in an indeterminate state

:valid	Form controls that can have constraint validation applied and are currently valid.

:invalid	Form controls that have constraint validation applied and are currently not valid. Matches a form control whose value doesn't match the constraints set on it by it's attributes, such as required, pattern , step and max.

:in-range	A non-empty input whose current value is within the range limits specified by the min and max attributes and the step .

:out-of-range	A non-empty input whose current value is NOT within the range limits specified by the min and max attributes or does not adher to the step constraint.

:placeholder-shown	An input or textarea element that is currently displaying placeholder text.

:required	<input>, <select>, or <textarea> element that has the required attribute set on it. Only matches elements that can be required. The attribute included on a non-requirable element will not make for a match.

:optional	<input>, <select>, or <textarea> element that does NOT have the required attribute set on it. Does not match elements that can't be required.

:blank	<input> and <textarea> elements that currently have no value.

:user-invalid	Similar to :invalid, but is activated on blur. Matches invalid input but only after the user interaction, such as by focusing on the control, leaving the control, or attempting to submit the form containing the invalid control.
 */