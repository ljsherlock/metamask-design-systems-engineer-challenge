import { configure, addParameters, addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import themeDecorator from "./themeDecorator"
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addDecorator(themeDecorator);
addDecorator(withKnobs);
addDecorator(withA11y);

addParameters({
  options: {
    brandTitle: 'MetaMask Price Checker',
    brandUrl: '',
    showRoots: true,
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    showPanel: false,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    // defaultViewport: 'iphone5',
  },

})

// automatically import all files ending in *.stories.(tsx|jsx)
configure([
    // Style Guide
    require.context('../src/styleguide', true, /.(mdx)$/),
    require.context('../src/primitiveUI', true, /.(mdx)$/),
    require.context('../src/organisms', true, /.(mdx)$/),
    require.context('../src/primitiveUI/Text/Copy', true, /story.stories\.(mdx|[tj]sx?)$/), 
    require.context('../src/components/UserInput/Mouse/IconButton', true, /story.stories\.(mdx|[tj]sx?)$/), 
    require.context('../src/primitiveUI/UserInput/Mouse/Button', true, /story.stories\.(mdx|[tj]sx?)$/), 

    // Scenes
    require.context('../src/organisms/PriceChecker', true, /scene.stories\.(mdx|[tj]sx?)$/), 
    require.context('../src/organisms/PriceChecker', true, /story.stories\.(mdx|[tj]sx?)$/), 
  ],
  module
);
