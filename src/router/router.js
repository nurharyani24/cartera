import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './../app/home-page';
import Explore from './../app/explore-page'
import ProfilePage from './../app/profile-page';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/explore" component={Explore}/>
                <Route path="/profile" component={ProfilePage}/>
            </Switch>
        );
    }
}

export default Router;