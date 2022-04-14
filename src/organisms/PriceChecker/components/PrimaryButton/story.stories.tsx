import React, { FunctionComponent } from 'react'
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs'

import PrimaryButton from '.'
import Div from '../../../../primitiveUI/Containers/Div'
import { theme } from '../../../../config/styleguide'

interface Props {
  name: string
  story: any
}

export const PrimaryButtonStory: FunctionComponent<Props> = (props) => {

  const buttonText = text(
    'Text',
    'Button'
  )

  return (
    <Div variant='flexbox' margin={theme.space[3]}>
      <PrimaryButton>{buttonText}</PrimaryButton>
    </Div>
  )
}

export default {
  title: '3. Organisms/Price Checker/Components/User Input/Mouse/Buttons/Primary',
  component: PrimaryButtonStory,
}

// @ts-ignore
PrimaryButtonStory.story = {
  name: 'default',
  decorators: [ withKnobs ]
}
