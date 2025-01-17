import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { ObjectStatus } from '@ui5/webcomponents-react/lib/ObjectStatus';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import '@ui5/webcomponents/dist/icons/sys-cancel';

export const onlyText = () => (
  <ObjectStatus state={select('state', ValueState, ValueState.Success)}>Object Status</ObjectStatus>
);
onlyText.story = {
  name: 'with Text only'
};

export const withIcon = () => (
  <ObjectStatus state={select('state', ValueState, ValueState.Success)} icon={<Icon src="sys-cancel" />}>
    Object Status
  </ObjectStatus>
);
withIcon.story = {
  name: 'with Text and Icon'
};

export const withDefaultIcon = () => (
  <ObjectStatus
    state={select('state', ValueState, ValueState.Success)}
    showDefaultIcon={boolean('showDefaultIcon', true)}
  >
    Default Icon Status
  </ObjectStatus>
);
withDefaultIcon.story = {
  name: 'with Default Icon'
};

export const withIconOnly = () => (
  <ObjectStatus icon={<Icon src="sys-cancel" />} state={select('state', ValueState, ValueState.Success)} />
);
withIconOnly.story = {
  name: 'with Icon only'
};

export default {
  title: 'Components | ObjectStatus',
  component: ObjectStatus
};
