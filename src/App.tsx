import React from 'react';
import MapsPage from './pages/mapsPage/mapsPage';
import { Switch, Route } from 'react-router-dom'

import 'normalize.css';
import Auth from "./pages/auth/auth";



function App() {
  return (
    <div className="App">
      <h3>Google maps API</h3>
      <Route>
        <Switch>
            <Route exact path='/' component={MapsPage}/>
            <Route exact path='api-google-maps/' component={MapsPage}/>
            <Route path="api-google-maps/login" component={Auth}/>
        </Switch>
      </Route>
    </div>
  );
}

export default App;
