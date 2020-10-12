import React from 'react';
import Home from './Home';
import { screen } from '@testing-library/react';
import { render } from '../../helpers/test-utils';

describe('App', () => {
  test('renders the Home Page', async () => {
    render(<Home/>);
  });
});
