import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Routes, Route, link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
