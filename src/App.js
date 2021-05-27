import login from './request/login';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
      <BrowserRouter>
        <div className="content">
            <Switch>
                <Route exact path="/" component={login} />
            </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
