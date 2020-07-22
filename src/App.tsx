import React from 'react';
import MapsPage from './pages/mapsPage/mapsPage';
import { Switch, Route, Link } from 'react-router-dom'

import 'normalize.css';
import Auth from "./pages/auth/auth";



function App() {
  return (
    <div className="App">
      <Auth/>
      <Route basepath="api-google-maps">
        <Switch>
            <Route exact path='/maps' component={MapsPage}/>
            <Route path="/" component={Auth}/>
        </Switch>
      </Route>
    </div>
  );
}

export default App;
