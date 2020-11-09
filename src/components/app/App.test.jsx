import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { getStates } from '../../services/statesAPI';

jest.mock('../../services/statesAPI');

describe('App component', () => {
  it('renders with a list of states', () => {
    getStates.mockResolvedValue([
      { 
        id: '1', 
        stateName: 'California', 
        electoralVotes: 55, 
        winner: 'Joe Biden' 
      },
      { 
        id: '2', 
        stateName: 'Nevada', 
        electoralVotes: 6, 
        winner: 'Joe Biden' 
      }
    ]);
    render(<App />); 
    const statesList = screen.getByTestId('states');

    return waitFor(() => {
      expect(statesList.children).toHaveLength(2);
    });
  });

  
});
