import React, { FunctionComponent } from 'react'
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs'

import PriceChecker from '.'
import { theme } from '../../config/styleguide'
import Div from '../../primitiveUI/Containers/Div'

interface Props {
  name: string
  story: any
}

export const PriceCheckerStory: FunctionComponent<Props> = (props) => {
  return (
    <Div variant='flexbox' margin={theme.space[3]}>
      <PriceChecker/>
    </Div>
  )
}

export default {
  title: '3. Organisms/Price Checker',
  component: PriceCheckerStory,
}

// @ts-ignore
PriceCheckerStory.story = {
  name: 'default',
  decorators: [ withKnobs ]
}
