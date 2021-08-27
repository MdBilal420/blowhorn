import React from 'react';
import Home from './page/Home';
import {
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
      </Routes>
    </>
  );
}

export default App;
