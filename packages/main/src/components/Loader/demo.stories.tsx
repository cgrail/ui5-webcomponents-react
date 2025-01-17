import { select, text } from '@storybook/addon-knobs';
import React from 'react';
import { Loader } from '@ui5/webcomponents-react/lib/Loader';
import { LoaderType } from '@ui5/webcomponents-react/lib/LoaderType';

export const renderLoader = () => (
  <Loader type={select('type', LoaderType, LoaderType.Indeterminate)} progress={text('progress', '40%')} />
);
renderLoader.story = {
  name: 'Default'
};

export default {
  title: 'Components | Loader',
  component: Loader
};
