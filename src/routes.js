import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Ninjas from './pages/Ninjas'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component ={Ninjas}/>
            </Switch>
        </BrowserRouter>
    )
}