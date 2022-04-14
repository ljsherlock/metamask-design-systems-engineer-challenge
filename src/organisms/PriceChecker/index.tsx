import React from 'react'

import { theme } from '../../config/styleguide'
import {
  styleComponentTypes,
} from '../../utilities/styleUtility'

import Heading from '../../primitiveUI/Text/Heading'
import Copy from '../../primitiveUI/Text/Copy'
import Div from '../../primitiveUI/Containers/Div'

import PriceCheckerContainer from './components/Container'
import LightSwitchUI from './components/LightSwitch'
import PrimaryButton from './components/PrimaryButton'
import SecondaryButton from './components/SecondaryButton'
import Info from './components/Text/Info'

interface Props extends styleComponentTypes {}
interface State {
  light: boolean
}

class PriceChecker extends React.Component<Props, State> {
  state = {
    light: true
  }
  
  constructor(props: Props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    let toggleValue;
    if(this.state.light === false) {
      toggleValue = true;
    } else {
      toggleValue = false;
    }
    this.setState({
      light: toggleValue
    });
  }
  
  render() {
    const { light } = this.state
    const variant = light === true ? 'light' : 'dark';

    return (
      <PriceCheckerContainer variant={variant} {...this.props}>
        <Div variant='flexbox' flexDirection='column'>
          <Div variant='flexbox' alignItems='flex-end' flexDirection={'column'} marginBottom={theme.space[0]}>
            <LightSwitchUI
              icon={variant === 'light' ? 'Sun' : 'Moon'} 
              variant={variant}
              onClick={this.handleClick}
              marginRight={theme.space[0]} 
              marginTop={theme.space[0]}
            />
          </Div>
          <Div variant='flexbox' flexDirection='column' margin={theme.space[3]} marginTop={'0'}>
            <Div variant='flexbox' flexDirection='column' marginBottom={theme.space[2]}>
              <Div variant='flexbox' alignItems='center' mb={theme.space[1]}>
                <Copy variant={variant} mr={theme.space[1]}>{'Ethereum Price'}</Copy>
                <Info variant={variant}>{'(ETH)'}</Info>
              </Div>
              <Heading variant={variant}>{'$3,443.05'}</Heading>
            </Div>
            <Div variant='flexbox' >
              <PrimaryButton marginRight={theme.space[1]}>{'See ETH'}</PrimaryButton>
              <SecondaryButton>{'See more'}</SecondaryButton>
            </Div>
          </Div>
        </Div>
      </PriceCheckerContainer>
    )
  }
}
export default PriceChecker