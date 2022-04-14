import merge from 'lodash.merge'
import styled, { 
	StyledComponentProps,
	css, 
	keyframes
} from 'styled-components'
import {
	position,
	layout, 
	flexbox,
	grid,
	space,
	typography,
	background,
	border,
	color,
	shadow,
	variant,
	PositionProps,
	LayoutProps, 
	FlexboxProps,
	GridProps,
	SpaceProps,
	TypographyProps,
	BackgroundProps,
	BorderProps,
	ColorProps,
	ShadowProps,
} from 'styled-system'

import { Map, Property } from '../config/types'
import styleguide from '../config/theme'
import { primitivesProperties } from '../config/primitiveProperties'

type StyledSystemProps<
	C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
	P extends object
> = StyledComponentProps<C, any, P, never> & {
	as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}

export type StyledComponentSystemProps = StyledSystemProps<'div', 
	PositionProps 
	& SpaceProps 
	& FlexboxProps 
	& LayoutProps
	& FlexboxProps
	& GridProps
	& SpaceProps
	& TypographyProps
	& BackgroundProps
	& BorderProps
	& ColorProps
	& ShadowProps
>

export type styleComponentProperties = {
	style?: Property | {} | null
	space?: Property | {} | null
	layout?: Property | {} | null
	typography?: Property | {} | null
	state?: Property | {} | null
	active?: Property | {} | null
	variants?: Property | {} | null
}

export type styleComponentTypesType = {
	className?: string
	properties?: styleComponentProperties
	variant?: string
}

export interface styleComponentTypes extends StyledComponentSystemProps {
	className?: string
	properties?: {
		style?: any
		space?: any
		layout?: any
		typography?: any
		state?: any
		active?: any
		variants?: any
	},
	variant?: string
}

export const propertiesObj = () => {
	return {
		layout: {},
		space: {},
		style: {},
		typography: {},
		state: {},
		active: {},
		variants: {},
	}
}

const HexToRGB = (hex: string) => {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

	if(result) {
		var r = parseInt(result[1], 16);
		var g = parseInt(result[2], 16);
		var b = parseInt(result[3], 16);
	} else {
		return false
	}

	r /= 255
	g /= 255
	b /= 255

	r *= 100
	g *= 100
	b *= 100

	r *= 255 / 100
	g *= 255 / 100
	b *= 255 / 100

	return {r: r, g: g, b: b}
}

const RGBtoHSL = (r: number, g: number, b: number) =>  {

	var max = Math.max(r, g, b), min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;

	if(max == min){
			h = s = 0; // achromatic
	} else {
			var d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch(max) {
					case r: h = (g - b) / d + (g < b ? 6 : 0); break;
					case g: h = (b - r) / d + 2; break;
					case b: h = (r - g) / d + 4; break;
			}
			if(h) {
				h /= 6;
			} else {
				return false
			}
	}

	s = s*100;
	s = Math.round(s);
	l = l*100;
	l = Math.round(l);
	h = Math.round(360*h);

	return { red: r, green: g, blue: b, hue: h, saturation: s , lightness: l }
}

export const sortGrays = (colorsArray: any) => {
	let graysArray = []

	for (var c = 0; c < colorsArray.length; c++) {
		const hex = colorsArray[c][1]
		const name = colorsArray[c][0]
		const rgb = HexToRGB(colorsArray[c][1])
		if(rgb) {
			const { r, g, b } = rgb
			const hsl = RGBtoHSL(r, g, b)

			if(hsl) { 
				if (hsl.hue === 0) {
					graysArray.push(
						{
							name: name,
							hex: hex,
							hue: hsl.hue,
							saturation: hsl.saturation,
							lightness: hsl.lightness,
						}
					)
				}
			}
		}
	}

	return graysArray.sort( (a, b) => {
		return a.lightness - b.lightness
	})
}

export const sortColors = (colors: any) => {
	let colorsArray = []
	for (var c = 0; c < colors.length; c++) {
		/* Get the hex value without hash symbol. */
		// var hex = colors[c][1].substring(1);
		
		const hex = colors[c][1]
		var name = colors[c][0]
		
		/* Get the RGB values to calculate the Hue. */
		// var r = parseInt(hex.substring(0,2),16)/255;
		// var g = parseInt(hex.substring(2,4),16)/255;
		// var b = parseInt(hex.substring(4,6),16)/255;

		// const hsl = rgbToHsl(r, g, b)
		const rgb = HexToRGB(colors[c][1])

		if(rgb) {
			const { r, g, b } = rgb
			const hsl = RGBtoHSL(r, g, b)
			if(hsl) {
				/* Getting the Max and Min values for Chroma. */
				var max = Math.max.apply(Math, [r,g,b]);
				var min = Math.min.apply(Math, [r,g,b]);

				/* Variables for HSV value of hex color. */
				var chr = max-min
				var hue = hsl.hue
				var val = hsl.lightness
				var sat = hsl.saturation

				if (val > 0 && hue !== 0) {
					/* Calculate Saturation only if Value isn't 0. */
					sat = chr/val;
					if (sat > 0) {
							if (r == max) { 
									hue = 60*(((g-min)-(b-min))/chr);
									if (hue < 0) {hue += 360;}
							} else if (g == max) { 
									hue = 120+60*(((b-min)-(r-min))/chr); 
							} else if (b == max) { 
									hue = 240+60*(((r-min)-(g-min))/chr); 
							}
					}

					colorsArray.push(
						{
							name: name,
							hex: hex,
							hue: hue,
							saturation: sat,
							lightness: val,
						}
					)
				}
			}
		}
	}
	/* Sort by Hue. */
	return colorsArray.sort( (a, b) => {
		// If the first item has a higher number, move it down
		// If the first item has a lower number, move it up
		if (a.lightness > b.lightness && a.hue < b.hue) return -1
		if (a.lightness < b.lightness && a.hue > b.hue) return 1
		// if (a.hue > b.saturation) return -1
		// if (a.saturation < b.saturation) return 1

		return 0
	})
}

export const mergeProperties = (
	properties: styleComponentProperties, 
	PropProperties: styleComponentProperties
) => {
	let mergedProperties = propertiesObj()

	if (PropProperties !== undefined) {
		Object.keys(mergedProperties).forEach(key => {
			switch (key) {
				case 'layout':
					mergedProperties.layout = ifMerge(properties.layout, PropProperties[key])
					break;
				case 'space':
					mergedProperties.space = ifMerge(properties.space, PropProperties[key])
					break;
				case 'typography':
					mergedProperties.typography = ifMerge(properties.typography, PropProperties[key])
					break;
				case 'style':
					mergedProperties.style = ifMerge(properties.style, PropProperties[key])
					break;
				case 'state':
					mergedProperties.state = ifMerge(properties.state, PropProperties[key])
					break;
				case 'variants':
					mergedProperties.variants = ifMerge(properties.variants, PropProperties[key])
					break;
				default:
					break;
			}
		})
		return mergedProperties
	}

	return  properties
 }

const ifExists = (vari: any, prop: string) => {
	return (vari !== undefined && vari[prop] !== undefined) ? vari[prop] : null
}

export const ifMerge = (a1: any, a2: any) => {
	return merge({}, a1, a2)
}

export const StyledComponent = (
	ReactComponent: any, 
	componentName: string,
	animation?: any
) => {
	// interface Props {
	// 	properties: styleComponentProperties
	// 	active: boolean
	// }

	let newComponent = styled(ReactComponent)
		.withConfig({ displayName: componentName })
		(
			(props: any) => ifMerge(ifExists(primitivesProperties[componentName], 'space'), ifExists(props.properties, 'space')),
			(props: any) => ifMerge(ifExists(primitivesProperties[componentName], 'layout'), ifExists(props.properties, 'layout')),
			(props: any) => ifMerge(ifExists(primitivesProperties[componentName], 'typography'), ifExists(props.properties, 'typography')),
			(props: any) => ifMerge(ifExists(primitivesProperties[componentName], 'style'), ifExists(props.properties, 'style')),
			(props: any) => ifMerge(ifExists(primitivesProperties[componentName], 'state'), ifExists(props.properties, 'state')),
			color,
			layout,
			space,
			typography,
			flexbox,
			border,
			background,
			position,
			grid,
			shadow,
			(props: any) => props.active && ifMerge(ifExists(primitivesProperties[componentName], 'active'), ifExists(props.properties, 'active')),
			(props: any) => variant({
				 variants: ifMerge(ifExists(primitivesProperties[componentName], 'variants'), ifExists(props.properties, 'variants')) 
			})
	)

	if (animation) {
		const keyframe = keyframes`${animation.keyframes}`

		newComponent = styled(newComponent)`
			&:after {
				color: purple;
				animation: ${css`${keyframe} 3s ease-out infinite;`}
			}`

		return newComponent
	}
	return newComponent
}
