import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createState } from '../../actions/stateActions';

const CreateState = () => {
  const [stateName, setStateName] = useState('');
  const [electoralVotes, setElectoralVotes] = useState(1);
  const [winner, setWinner] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if(target.name === 'state-name') setStateName(target.value);
    if(target.name === 'electoral-votes') setElectoralVotes(target.value);
    if(target.name === 'winner') setWinner(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createState({
      stateName,
      electoralVotes,
      winner
    }));
    setStateName('');
    setElectoralVotes('');
    setWinner('');
      
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="state-name">State Name</label>
      <input 
        id="state-name" 
        type="text" 
        name="state-name" 
        value={stateName} 
        onChange={handleChange}/> 
      <label htmlFor="state-electoral-votes">State Electoral Votes</label>
      <input 
        id="state-electoral-votes" 
        type="number" 
        name="electoral-votes" 
        value={electoralVotes}
        onChange={handleChange}/>
      <label htmlFor="state-winner">State Winner</label>
      <input 
        id="state-winner"
        type="text" 
        name="winner" 
        value={winner}
        onChange={handleChange}/>
      <button>Create State</button>
    </form>
  );
};



export default CreateState;
