import React, { FunctionComponent } from 'react'
import { 
  withKnobs,
  boolean 
} from '@storybook/addon-knobs'

import Dialog from '.'

interface Props {
  name: string
  story: any
}

export const DialogStory: FunctionComponent<Props> = (props) => {

  const visible = boolean(
    'Visible',
    false
  )

  return (
    <Dialog variant={visible && 'visible'}>
      This is my dialog
    </Dialog>
  )
}

export default {
  title: 'Primitive/Containers/Functional/Dialog',
  component: DialogStory,
}

// @ts-ignore
DialogStory.story = {
  name: '',
  decorators: [ withKnobs ]
}
