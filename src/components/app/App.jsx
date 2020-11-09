import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import CreateState from '../create-state/CreateState';

export default function App() {
  return (
    <Provider store={store}>
      <CreateState />
    </Provider>
  );
}
