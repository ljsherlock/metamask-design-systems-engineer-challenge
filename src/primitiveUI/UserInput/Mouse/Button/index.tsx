import React from 'react'

import { 
	StyledComponent, 
	styleComponentTypes 
} from '../../../../utilities/styleUtility'

export interface ButtonProps extends styleComponentTypes {
	type?: 'submit' | 'reset' | 'button'
	className?: string
	id?: string
	onMouseEnter?: (e) => void
	onClick?: (e) => void
	onKeyDown?: (e) => void
	onBlur?: (e) => void
	inputRef?: () => void
	disabled?: boolean
	variant?: string
	active?: boolean
	properties?: any
}

export const Button: React.FunctionComponent<ButtonProps> = ({ 
	type,
	id,
	className,
	onClick,
	onMouseEnter,
	onBlur,
	disabled,
	children,
}) => {
	return (
		<button
			type={type}
			id={id}
			className={className}
			onMouseEnter={onMouseEnter}
			onBlur={onBlur}
			onClick={onClick}
			disabled={disabled}
		>
      {children}
    </button>
	)
}

Button.defaultProps = {
	type: 'button'
}

export default StyledComponent(Button, 'Button')