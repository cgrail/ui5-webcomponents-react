import React from 'react';
import { Switch } from '@ui5/webcomponents-react/lib/Switch';
import { mountThemedComponent } from '@shared/tests/utils';

describe('Switch', () => {
  test('Basic Test (generated)', () => {
    const wrapper = mountThemedComponent(<Switch />);
    expect(wrapper.render()).toMatchSnapshot();
  });
});
