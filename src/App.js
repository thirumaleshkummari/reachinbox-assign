
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

import SignUp from './pages/signup'
import Mail from './pages/mail'
import Home from './pages/home'

import './App.css'

function Layout() {
  return (
    <div>
      <Outlet /> {/* This is where nested routes will be rendered */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path='/mail' element={<Mail/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
