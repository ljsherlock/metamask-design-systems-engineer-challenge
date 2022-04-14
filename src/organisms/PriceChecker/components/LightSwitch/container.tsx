import React from 'react'

import {
  styleComponentTypes,
} from '../../../../utilities/styleUtility'

import LightSwitchUI from '.'
import PriceCheckerContainer from '../../../../scenes/PriceChecker/components/Container'

interface Props extends styleComponentTypes {}

class LightSwitch extends React.Component<Props> {
  state = {
    light: true
  }
  
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if(this.state.light === false) {
      this.setState({
        light: true
      });
    } else {
      this.setState({
        light: false
      });
    }
  }
  
  render() {
    const { light } = this.state
    const LightSwitchState = light === true ? 'Sun' : 'Moon';

    return (
      <PriceCheckerContainer variant={light === true ? 'light' : 'dark'}>
        <LightSwitchUI 
          icon={LightSwitchState} onClick={this.handleClick} 
          variant={light === true ? 'light' : 'dark'}
        />
      </PriceCheckerContainer>  
    )
  }
}
export default LightSwitch