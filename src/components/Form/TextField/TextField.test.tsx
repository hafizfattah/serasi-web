import {render} from '@testing-library/react';
import React from 'react';

import TextField from './TextField';

describe('TextField', () => {
  test('should render properly', () => {
    render(<TextField id="1" type="text" />);
  });
});
