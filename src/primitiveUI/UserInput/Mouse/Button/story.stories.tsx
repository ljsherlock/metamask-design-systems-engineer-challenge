import React, { FunctionComponent } from 'react'
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Button from './index'
import Div from '../../../../primitiveUI/Containers/Div';
import { theme } from '../../../../config/theme';

interface Props {
  name: string
  story: any
}

export const ButtonStory: FunctionComponent<Props> = (props) => {
  
  const label = text("Label", "lalala");
  const variant = select(
    "Variant", 
    {
      None: '',
      Error: 'error',
    }, 
    'none'
  )
  
  return (
    <Div variant='flexbox' margin={theme.space[3]}>
      <Button
        id='label'
        variant={variant}
      >
        click
      </Button>
    </Div>
  )
}

export default {
  title: '2. Primitive Components/User Input/Mouse/Buttons/Primitive',
  component: ButtonStory,
}

// @ts-ignore
ButtonStory.story = {
  name: 'Button',
  decorators: [ withKnobs ]
}
