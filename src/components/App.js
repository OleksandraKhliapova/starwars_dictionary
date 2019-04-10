import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

import MainScreen from './MainScreen';

const App = () => (
  <Provider store={store}>
    <MainScreen />
  </Provider>
)

export default App;
