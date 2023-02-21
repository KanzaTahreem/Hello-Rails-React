import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Greetings from './Greetings';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/greetings" element={<Greetings />} />
      </Routes>
    </Router>
  );
}

export default App;
