import { getStates, postState } from '../services/statesAPI';

export const PREPEND_STATE = 'PREPEND_STATE';
export const prependState = state => ({
  type: PREPEND_STATE,
  payload: state
});

export const SET_STATES = 'SET_STATES';
export const setStates = states => ({
  type: SET_STATES,
  payload: states
});

export const createState = state => dispatch => {
  postState(state)
    .then(createdState => {
      dispatch(prependState(createdState));
      
    });
};

export const fetchStates = () => dispatch => {
  getStates()
    .then(states => {
      dispatch(setStates(states));
    });
};
