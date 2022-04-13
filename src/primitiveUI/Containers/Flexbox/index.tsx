import React, { FunctionComponent } from 'react'

import styled, { StyledComponentProps } from 'styled-components'
import {
	layout,
	layoutProps,
	position,
	positionProps,
	flexbox,
	FlexboxProps,
	space,
	SpaceProps,
	color,
	border,
	typography,
	zIndex,
	variant,
} from 'styled-system'

type StyledSystemProps<
	C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
	P extends object
> = StyledComponentProps<C, any, P, never> & {
	as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

type FlexboxElementProps = StyledSystemProps<'div', positionProps & SpaceProps & FlexboxProps>

interface Props {
	children?: any
	className?: string
	id?: string
	FlexboxElementProps?
}

const Flexbox: FunctionComponent<Props> = ({ children, className, id }) => {
	return <div id={id} className={className}>{children}</div>
}

const FlexboxElement: any = styled(Flexbox)(
	{
		display: 'flex',
	},
	variant({
	  variants: {
	    fill: {
					width: '100%',
					height: '100%',
			},
			fillh: {
				height: '100%',
		},
	  }
	}),
	layout,
	position,
	zIndex,
	space, // https://styled-system.com/api#space
	flexbox, // https://styled-system.com/api#flex
	border, // https://styled-system.com/api#border
	color, // https://styled-system.com/api#color
	typography // https://styled-system.com/api#typography
)

export default FlexboxElement
