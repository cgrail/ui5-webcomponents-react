import React from 'react';
import { Tokenizer } from '@ui5/webcomponents-react/lib/Tokenizer';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Tokenizer', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Tokenizer />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
