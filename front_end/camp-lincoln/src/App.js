import React from 'react';
import LandingPage from './LandingPage/landing';
import Navbar from './Navbar/navbar';
import Account from './Account/account';
import {MyTable} from './Schedule/Schedule'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
    //alert("runns");
    return (

    <BrowserRouter>
        <div>
        <Navbar/>
          <Switch>
              <Route exact path="/" render={() => <LandingPage />} />
              <Route path="/account" render={() => <Account/> } />
              <Route path="/table" render={() => <MyTable/> } />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;