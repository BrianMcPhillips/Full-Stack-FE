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
      <input type="text" name="state-name" value={stateName} 
        onChange={handleChange}/> 
      <input type="number" name="electoral-votes" value={electoralVotes}
        onChange={handleChange}/>
      <input type="text" name="winner" value={winner}
        onChange={handleChange}/>
      <button>Create State</button>
    </form>
  );
};



export default CreateState;
