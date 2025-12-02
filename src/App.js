import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Events from './pages/Events';
import Teams from './pages/Teams';
import Reports from './pages/Reports';
import Content from './pages/Content';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/content" element={<Content />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;