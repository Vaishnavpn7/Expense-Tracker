import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './Home';
import Login from './Components/Login/Login';
import Register from './Components/Registration/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Login />} />
        <Route path = '/home' element = {<Home />} />
        <Route path = '/register' element = {<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
