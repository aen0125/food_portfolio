import React, { Component } from 'react';
import Header from './HeaderComp';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                    <Switch>
                        <Route path='/home' />
                        <Redirect to='/home' />
                    </Switch>
            </div>
        );
    }
}

export default withRouter(Main);