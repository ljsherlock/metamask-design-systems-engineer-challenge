import React, { FunctionComponent } from 'react'

import { theme } from '../../../../config/styleguide'
import { 
  propertiesObj, 
  mergeProperties, 
} from '../../../../utilities/styleUtility'

import Button, { ButtonProps } from '../../../../primitiveUI/UserInput/Mouse/Button'
import Icon from '../../../../primitiveUI/Media/Icon'

let properties = propertiesObj()
properties.layout = {
  width: theme.space[1],
  height: theme.space[1],
}
properties.space= {
  padding: '0px',
}
properties.typography = {
  lineHeight: '0',
}

let iconProperties = propertiesObj()
iconProperties.layout = {
  width: '100%',
  height: '100%',
}

interface IconButtonProps extends ButtonProps {
  icon: string
  properties?: any
  color?: string
  position?: string
}

const RoundButton: FunctionComponent<IconButtonProps> = ({
	type,
	id,
	className,
	onClick,
	onMouseEnter,
	onBlur,
	disabled,
  children,
  icon,
  properties: overrides,
  ...remainingProps
}) => {
	return (
    <Button
      type={type}
      id={id}
      className={className}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onBlur={onBlur}
      disabled={disabled}
      properties={mergeProperties(properties, overrides)}
      {...remainingProps}
    >
      <Icon properties={iconProperties} icon={icon}/>
    </Button>
  )
}

export default RoundButton
