import React, { FunctionComponent } from 'react'
import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs'

import SecondaryButton from '.'
import Div from '../../../../primitiveUI/Containers/Div'
import { theme } from '../../../../config/styleguide'

interface Props {
  name: string
  story: any
}

export const SecondaryButtonStory: FunctionComponent<Props> = (props) => {

  const buttonText = text(
    'Text',
    'Button'
  )

  return (
    <Div variant='flexbox' margin={theme.space[3]}>
      <SecondaryButton>{buttonText}</SecondaryButton>
    </Div>
  )
}

export default {
  title: '3. Organisms/Price Checker/Components/User Input/Mouse/Buttons/Secondary',
  component: SecondaryButtonStory,
}

// @ts-ignore
SecondaryButtonStory.story = {
  name: 'default',
  decorators: [ withKnobs ]
}
