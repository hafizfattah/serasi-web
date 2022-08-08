import {render} from '@testing-library/react';
import React from 'react';

import Dropdown from './Dropdown';

describe('Dropdown', () => {
  test('should render properly', () => {
    render(<Dropdown sampleTextProp="test" />);
  });
});
