import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import UI5ToggleButton from '@ui5/webcomponents/dist/ToggleButton';
import React, { FC } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface ToggleButtonPropTypes extends WithWebComponentPropTypes {
  design?: ButtonDesign; // @generated
  disabled?: boolean; // @generated
  icon?: string; // @generated
  iconEnd?: boolean; // @generated
  submits?: boolean; // @generated
  pressed?: boolean; // @generated
  onClick?: (event: Event) => void; // @generated
  children?: string; // @generated
}

const ToggleButton: FC<ToggleButtonPropTypes> = withWebComponent<ToggleButtonPropTypes>(UI5ToggleButton);

ToggleButton.displayName = 'ToggleButton';

ToggleButton.defaultProps = {
  design: ButtonDesign.Default // @generated
};

export { ToggleButton };
