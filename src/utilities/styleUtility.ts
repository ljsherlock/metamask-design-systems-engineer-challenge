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
import { theme } from '../config/theme'

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

export const ifMerge = (a1, a2) => {
	return merge({}, a1, a2)
}

export type styleComponentTypesType = {
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

// const rgbToHsl = (r, g, b) => {
// 	r /= 255
// 	g /= 255
// 	b /= 255
	
// 	let max = Math.max(r, g, b);
//   let min = Math.min(r, g, b);
//   let d = max - min;
//   let h;
	
// 	if (d === 0) h = 0;
//   else if (max === r) h = (g - b) / d % 6;
//   else if (max === g) h = (b - r) / d + 2;
//   else if (max === b) h = (r - g) / d + 4;
	
// 	let l = (min + max) / 2;
//   let s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
	
// 	return { hue: h * 60, saturation: s, lightness: l };
// }

const HexToRGB = (hex) => {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

	var r = parseInt(result[1], 16);
	var g = parseInt(result[2], 16);
	var b = parseInt(result[3], 16);

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

const RGBtoHSL = (r, g, b) =>  {

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
			h /= 6;
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
		const { r, g, b } = rgb
		const hsl = RGBtoHSL(r, g, b)

		// console.log(colorsArray[c])
		// console.log(`name: ${name}: ${hex}`)
		// console.log(`${name}, ${hex}`, hsl)

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
		const { r, g, b } = rgb
		const hsl = RGBtoHSL(r,g,b)

		/* Getting the Max and Min values for Chroma. */
		var max = Math.max.apply(Math, [r,g,b]);
		var min = Math.min.apply(Math, [r,g,b]);

		/* Variables for HSV value of hex color. */
		var chr = max-min
		var hue = hsl.hue
		var val = hsl.lightness
		var sat = hsl.saturation

		console.log(name, hsl)

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
	console.log('before sort', colorsArray)
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

export const mergeProperties = (properties, PropProperties) => {
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

const ifExists = (vari, prop) => (vari !== undefined && vari[prop] !== undefined) ? vari[prop] : null

export const StyledComponent = (ReactComponent, componentName, animation?: any) => {
	const { primitives } = theme 

	let newComponent = styled(ReactComponent)
		.withConfig({ displayName: componentName })
		(
			props => ifMerge(ifExists(primitives[componentName], 'space'), ifExists(props.properties, 'space')),
			props => ifMerge(ifExists(primitives[componentName], 'layout'), ifExists(props.properties, 'layout')),
			props => ifMerge(ifExists(primitives[componentName], 'typography'), ifExists(props.properties, 'typography')),
			props => ifMerge(ifExists(primitives[componentName], 'style'), ifExists(props.properties, 'style')),
			props => ifMerge(ifExists(primitives[componentName], 'state'), ifExists(props.properties, 'state')),
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
			props => props.active && ifMerge(ifExists(primitives[componentName], 'active'), ifExists(props.properties, 'active')),
			props => variant({
				 variants: ifMerge(ifExists(theme.primitives[componentName], 'variants'), ifExists(props.properties, 'variants')) 
			})
	)

	if (animation) {
		// const newComponentWithAnimation = styled(newComponent)`
		// 	${animation.selector}: {
		// 		animation: ${css`${animation.name} ${animation.duration} ${animation.timingFunction} ${animation.iterationCount};`}
		// 	}`

		// console.log(newComponentWithAnimation)

		// const markPulse = keyframes`
		// 	0% {
		// 		opacity: 0;
		// 		transform: scale(0, 0);
		// 	}
		// 	50% {
		// 		opacity: 1;
		// 		transform: scale(1, 1);
		// 	}
		// 	100% {
		// 	transform: scale(0, 0); 
		// 	}
		// `
		console.log(newComponent)

		console.log('animation.name', animation.keyframes)
		const keyframe = keyframes`${animation.keyframes}`

		newComponent = styled(newComponent)`
			&:after {
				color: purple;
				animation: ${css`${keyframe} 3s ease-out infinite;`}
			}`
		console.log(newComponent)

		return newComponent
	}
	return newComponent
}
