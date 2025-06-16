import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Skills from './pages/Skills';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Skills />} />
      </Routes>
    </Router>
  );
};

export default App;