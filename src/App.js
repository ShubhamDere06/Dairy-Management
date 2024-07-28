import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm'; // Assuming you have a RegistrationForm component
import Dashboard from './Dashboard';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      
      </Routes>
    </Router>
  );
};

export default App;
