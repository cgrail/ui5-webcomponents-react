import { renderThemedComponent } from '@shared/tests/utils';
import React from 'react';
import { LoaderType } from '@ui5/webcomponents-react/lib/LoaderType';
import { Loader } from '@ui5/webcomponents-react/lib/Loader';

describe('Loader', () => {
  test('indeterminate', () => {
    const wrapper = renderThemedComponent(<Loader type={LoaderType.Indeterminate} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('determinate', () => {
    const wrapper = renderThemedComponent(<Loader type={LoaderType.Determinate} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('determinate with progress prop', () => {
    const wrapper = renderThemedComponent(<Loader type={LoaderType.Determinate} progress="42%" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('default', () => {
    const wrapper = renderThemedComponent(<Loader />);
    expect(wrapper).toMatchSnapshot();
  });

  test('with Custom Class Name', () => {
    const wrapper = renderThemedComponent(<Loader className="myTestClass" />);
    expect(wrapper).toMatchSnapshot();
  });
});
