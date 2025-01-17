import React, { FC } from 'react';
import UI5Option from '@ui5/webcomponents/dist/Option';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface OptionPropTypes extends WithWebComponentPropTypes {
  selected?: boolean; // @generated
  icon?: string; // @generated
  value?: string; // @generated
}

const Option: FC<OptionPropTypes> = withWebComponent<OptionPropTypes>(UI5Option);

Option.displayName = 'Option';

Option.defaultProps = {
  icon: null // @generated
};

export { Option };
