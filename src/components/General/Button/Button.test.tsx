import {render} from '@testing-library/react';
import React from 'react';

import Button from './Button';

describe('button', () => {
  test('should render properly', () => {
    render(<Button>Hello</Button>);
  });
});
