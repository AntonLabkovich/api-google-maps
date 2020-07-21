import React from 'react';
import MapsPage from './pages/mapsPage/mapsPage';
import { Switch, Route } from 'react-router-dom'

import 'normalize.css';
import Auth from "./pages/auth/auth";



function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/' component={MapsPage}/>
            <Route path="/login" component={Auth}/>
        </Switch>
    </div>
  );
}

export default App;
