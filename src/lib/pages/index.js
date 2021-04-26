const NotFound = () => <h1>не знайдено 404</h1>;
import React from 'react';
import Administrator from "./Administrator";
import Business from "./Business";
import Contact from "./Contact";
import Fallback from "./Fallback";
import Home from "./Home"
import Login from "./Login"; 
import Restaurant from "./Restaurant"; 


import User from "./User"; 
import { Route, Switch } from 'react-router-dom';

export const RouterComponent = () => {
    return (
        <Switch>

            <Route exact path="/" render={()=><Home/>}/>
            <Route exact path="/login" render={()=><Login/>}/>
            <Route exact path="/administrator" render={()=><Administrator/>}/>
            <Route exact path="/business" render={()=><Business/>}/>
            <Route exact path="/contact" render={()=><Contact/>}/>
            <Route exact path="/fallback" render={()=><Fallback/>}/>
            <Route exact path="/login" render={()=><Login/>}/>
            <Route exact path="/restaurant" render={()=><Restaurant/>}/>
            
                        <Route exact path="/user" render={()=><User/>}/>

            <Route component={NotFound} />
        </Switch>
    );
};