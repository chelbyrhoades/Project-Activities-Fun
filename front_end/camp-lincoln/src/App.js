import React from 'react';
import logo from './logo.svg';
import Routes from './routes';
import LandingPage from './LandingPage/landing';
import Login from './LoginPage/login';
import Navbar from './Navbar/navbar';
import Account from './Account/account';

function App() {
  return (
    <div>
      <Navbar/>
      <Login />

      </div>
  );
}

export default App;