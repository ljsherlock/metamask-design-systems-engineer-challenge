import React, { FunctionComponent } from 'react'
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs'

import Info from '.'
import Div from '../../../../../primitiveUI/Containers/Div'
import { theme } from '../../../../../primitiveUI'

interface Props {
  name: string
  story: any
}

export const InfoStoryStory: FunctionComponent<Props> = (props) => {
  
  const label = text("Label", "Info");
  const variant = select(
    'Select',
    {
      dark: 'dark',
      light: 'light',
    },
    'light'
  )

  return (
    <Div variant='flexbox' margin={theme.space[3]}>
      <Info variant={variant}>{label}</Info>
    </Div>
  )
}

export default {
  title: '3. Organisms/Price Checker/Components/Text/Info',
  component: InfoStoryStory,
}

// @ts-ignore
InfoStoryStory.story = {
  name: 'default',
  decorators: [ withKnobs ]
}
