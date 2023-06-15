import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import store from '../redux';

const App = () => (
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  </Provider>
);

export default App;
