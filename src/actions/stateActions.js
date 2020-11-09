import { postState } from '../services/statesAPI';

export const PREPEND_STATE = 'PREPEND_STATE';
export const prependState = state => ({
  type: PREPEND_STATE,
  payload: state
});

export const createState = state => dispatch => {
  postState(state)
    .then(createdState => {
      dispatch(prependState(createdState));
      
    });
};
