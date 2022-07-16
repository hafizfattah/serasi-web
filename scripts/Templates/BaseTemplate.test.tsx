import {render} from '@testing-library/react';
import React from 'react';

import BaseTemplate from './BaseTemplate';

describe('BaseTemplate', () => {
  test('should render properly', () => {
    render(<BaseTemplate sampleTextProp="test" />);
  });
});
