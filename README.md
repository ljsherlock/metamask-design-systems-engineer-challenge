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

Or see see it live on [Vercel](https://metamask-design-systems-engineer-challenge-jluc24xkr.vercel.app/?path=/story/1-style-guide-1-summary--page).

### Transitions
As part of the pre-qualifying questions that I did not get to ask, transitions for the following componets can be enabled by uncommenting all commented lines in `src/config/primitiveComponents.ts`:
- Headline
- Body
- Info
- All Buttons globally
- PriceChecker Container

### Pre-Assignment Questions & Answer
Before you begin answer these questions

**What do you think are the greatest areas of risk in completing the project?**
- The possibility that the Figma system has inconsistencies that I have yet seen.

**What clarifying questions would you ask? If you’re able to make assumptions about these and continue, please record and share your assumptions**
- I assume that the purple dashed border is not part of the design because it is not included in the organism.
- What browsers are we supporting? E.g. can we use only SVG, or do we need to include PNG? I will be including PNG to mitigate this assumption.
- I assume that the 'Headers +8% Lighter #22363D' is meant to say "Headline".
- I would ask if transitions are required for the buttons (for all states), and for the components that change when switching for light to dark mode.
- I assume that Headline, Copy, Info and Background styles that change on various states will require transitions

### Post-Assignment Question & Answer
After you’re done answer these questions

**Describe the major design/build decisions and why you made them**
1.  Most of my decisions on this project were based on the theory of abstraction and see where components are re-used.
2. I extracted the primitive values of the design system e.g. colors, typography, spacing, etc and placed them inside of a theme object which is used throughout the library, and allows for perfect consistency.
3. I previously created a function that extends StyledComponents and StyledSystem so that I can split CSS properties into layout, space, typography, style, state, active and variants and create default global values for primitive components that are either used as is, or extended to build more specific components. I've used that with this project. (see primitiveUI/ and PrimitiveProperties/src/config). 
4. I used system of abstraction and re-use. For example, the light switch is based off of a number of components and component types. It uses a primitive Button component which is extended by a IconButton component, which is further extended by the LightSwitch component, and finally a container that uses state to store the switch functionality.
5. The above is based on the theory of stateless components, which drives most of my decision-making. The reason I trust these theories and made these decisions is because it makes the system very able to be re-used because logic and UI is decoupled.
6. I have also arranged the folder structure such that components used in more than one place are stored in src/components and those that are unique to one page, or component are stored in the directory of said component, or page (and I like to think of pages as scenes).

**How long did the assignment take (in hours)?** 
- 12 hours

**Do you feel that this assignment allowed you to showcase your abilities effectively?**

I believe this assignment has quite effectively shown my ability to effectively extract and systemise the style and functionality of a simple application and organise that style and functionality in a sane, evergreen and effective way.

**Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?**

Node.js development e.g. fetching the ETH price with something like Axios from somewhere like Gemini, and implementing a fullstack application (I am currently learning to use the Remix framework, currently I use Next.js).