import { PREPEND_STATE, SET_STATES } from '../actions/stateActions';

const initialState = {
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case PREPEND_STATE:
      return { ...state, list: [action.payload, ...state.list] };
    case SET_STATES:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
