import React from 'react';
import MapsPage from './pages/mapsPage/mapsPage';
import { Switch, Route } from 'react-router-dom'

import 'normalize.css';
import Auth from "./pages/auth/auth";



function App() {
  return (
    <div className="App">
      <Auth/>
      <Route>
        <Switch>
            <Route path='/maps' component={MapsPage}/>
            <Route exact path="/" component={Auth}/>
        </Switch>
      </Route>
    </div>
  );
}

export default App;
