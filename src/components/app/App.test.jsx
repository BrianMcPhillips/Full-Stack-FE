import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { getStates, postState } from '../../services/statesAPI';
import userEvent from '@testing-library/user-event';

jest.mock('../../services/statesAPI');

describe('App component', () => {
  beforeAll(() => {
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
  });
  it('renders with a list of states', () => {

    render(<App />); 
    const statesList = screen.getByTestId('states');

    return waitFor(() => {
      expect(statesList.children).toHaveLength(2);
    });
  });

  it('creates a new state with form submit', () => {
    postState.mockResolvedValue({
      id: '3', 
      stateName: 'Washington', 
      electoralVotes: 10, 
      winner: 'Joe Biden' 
    });

    render(<App />);

    const statesList = screen.getByTestId('states');

    const stateNameInput = screen.getByLabelText('State Name');
    const stateElectoralVotes = screen.getByLabelText('State Electoral Votes'); 
    const stateWinner = screen.getByLabelText('State Winner');
    const submitButton = screen.getByText('Create State');

    userEvent.type(stateNameInput, 'Washington');
    userEvent.type(stateElectoralVotes, '10');
    userEvent.type(stateWinner, 'Joe Biden');

    userEvent.click(submitButton);

    return waitFor(() => {
      expect(statesList.children).toHaveLength(3);
    });
  });
});
