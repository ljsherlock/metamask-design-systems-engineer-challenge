import { theme } from './styleguide'

export const errorVariant = {
  borderColor: theme.colors.carnation,
}

export const primitivesProperties: any = {
  Div: {
    layout: {
      boxSizing: 'border-box',
      transition: theme.transitions[0],
    },
    variants: {
      flexbox: {
        display: 'flex'
      }
    }
  },
  Text: {
    space: {
      margin: 0,
    },
    typography: {
      lineHeight: 1.5
    }
  },
  Heading: {
    typography: {
      fontSize: theme.fontSizes[2],
      fontWeight: 'bold',
      margin: '0'
    },
    style: {
      color: theme.colors.tePapaGreen,
      // Uncomment for smooth changes
      // transition: theme.transitions[0]
    },
    variants: {
      dark: {
        color: theme.darkTheme.headline
      }
    }
  },
  Copy: {
    space: {
      margin: '0'
    },
    typography: {
      fontSize: theme.fontSizes[1],
      // Uncomment for smooth changes
      // transition: theme.transitions[0]
    },
    style: {
      color: theme.colors.timberGreen
    },
    variants: {
      dark: {
        color: theme.colors.white
      }
    }
  },
  Button: {
    style: {
      cursor: 'pointer',
      outline: 'none',
      background: 'transparent',
      userSelect: 'none',
      border: theme.border[1],
      // Uncomment for smooth changes
      // transition: theme.transitions[0]
    },
    typography: {
      fontSize: theme.fontSizes[0],
      fontWeight: 'bold'
    },
    space: {
      padding: `10px ${theme.space[2]}`
    },
    state: {
      ':hover': {
        background: theme.colors.wildSand
      },
      ':active': {
        background: theme.colors.gallery
      },
      ':disabled': {
        opacity: '50%'
      },
    }
  }, 
  HorizontalLine: {
    layout: {
      width: '100%'
    }
  }
}