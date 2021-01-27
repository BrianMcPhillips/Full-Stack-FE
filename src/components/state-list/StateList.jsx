import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStates } from '../../actions/stateActions';

const StateList = () => {
  const states = useSelector(state => state.state.list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStates());
  }, []);

  const stateElements = states.map(state => (
    <li key={state.id}>
      <h2>{state.stateName}</h2>
      <p>Electoral Votes: {state.electoralVotes}</p>
      <h3>{state.winner}</h3>
    </li>
  ));

  return (
    <ul data-testid="states">
      {stateElements}
    </ul>
  );
};

export default StateList;
