import { PREPEND_STATE } from '../actions/stateActions';

const initialState = {
  list: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case PREPEND_STATE:
      return { ...state, list: [action.payload, ...state.list] };
    default:
      return state;
  }
}
