import React, { FunctionComponent } from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'

import SwitchedContent from '.'

interface Props {
  name: string
  story: any
}

export const SwitchedContentStory: FunctionComponent<Props> = (props) => {

  const activeContent = select(
    'activeContent',
    {
      pacakgeInfo: 'pacakgeInfo',
      activityLog: 'activityLog'
    },
    'activityLog'
  )

  return (
    <SwitchedContent 
      contentArray={{ 
        pacakgeInfo: '<PackageInfo packageData={packageData} />',
        activityLog: '<ActivityLog activityData=',
      }}
      activeContent={activeContent}
    />
  )
}

export default {
  title: 'Style Guide/Containers/Switched Content',
  component: SwitchedContentStory,
}

// @ts-ignore
SwitchedContentStory.story = {
  name: '',
  decorators: [ withKnobs ]
}
