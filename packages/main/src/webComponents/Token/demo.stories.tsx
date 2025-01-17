import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import { Token } from './index';

export default {
  title: 'UI5 Web Components | Token',
  component: Token
};

export const generatedDefaultStory = () => (
  <Token
    selected={boolean('selected', false)}
    readonly={boolean('readonly', false)}
    onDelete={action('onDelete')}
    onSelect={action('onSelect')}
  >
    Token 1
  </Token>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
