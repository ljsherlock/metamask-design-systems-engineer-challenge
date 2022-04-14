// theme.ts

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { theme } from './styleguide'

import { primitivesProperties } from './primitiveProperties'
import { sortColors, sortGrays } from '../utilities/styleUtility'

/*
 :root font = 16px
*/ 

const colorsArray = Object.entries(theme.colors)
let sortedGrays = sortGrays( colorsArray )
theme.sortedGrays = sortedGrays.reverse()
theme.sortedColors = sortColors( Object.entries(theme.colors)  )
theme.primitivesProperties = primitivesProperties

export default function useTheme() {
  return useContext(ThemeContext);
}

export {theme, useTheme} 