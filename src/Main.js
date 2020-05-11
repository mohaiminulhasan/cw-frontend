import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Compare from './compare/Compare';
import Home from './home/Home';
import Search from './search/Search';
import VehicleDetail from './vehicledetail/VehicleDetail';


class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/compare' component={Compare} />
                    <Route exact path='/' component={Home} />
                    <Route path={`/search`} component={Search} />
                    <Route path={`/:vehicleId`} component={VehicleDetail} />
                </Switch>
            </div>
        );
    }
}

export default Main;