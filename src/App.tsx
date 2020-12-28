import { Redirect, Route, Switch } from 'react-router-dom';
import React, { lazy } from 'react';

const Home = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route>
                <Redirect to="/" />
            </Route>
        </Switch>
    );
}

export default App;
