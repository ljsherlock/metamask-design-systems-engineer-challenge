# Metamask Design Systems Engineer Challenge

This is the design system component library for the Price Checker as visualised in the Figma deisgns.

The storybook is split into 3 sections:
1. Styleguide
2. Primitive Compoents (components that are not usually used directly but built upon and hold global and consistent styles across the system).
3. Organisms (the main Price Checker component and it's supporting components)

You can run Storybook by running:
```bash
  # yarn/npm storybook
```

## Transitions
As part of the pre-qualifying questions that I did not get to ask, transitions for the following componets can be enabled by uncommenting all commented lines in `src/config/primitiveComponents.ts`:
- Headline
- Body
- Info
- All Buttons globally
- PriceChecker Container