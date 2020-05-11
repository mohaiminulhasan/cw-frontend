import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import CarCompareBox from './CarCompareBox';
import BikeCompareBox from './BikeCompareBox';

class CompareBox extends React.Component {
    render() {
        if (this.props.match.params.vehicle === 'cars') {
            return (<CarCompareBox />);
        } else {
            return (<BikeCompareBox />);
        }
    }
}

class Compare extends React.Component {
    render() {
        let largeButton

        if (window.location.pathname === "/compare") {
            largeButton = {
                marginTop : '100%',
                width : 150,
                height : 150,
                lineHeight : '135px',
                fontSize : '1.5em'
            }
        }
        
        return (
            <div className="text-center">
                <br/>
                <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item">
                        <NavLink style={{...largeButton}} className="nav-link btn btn-sm btn-outline-secondary" to={`${this.props.match.url}/cars`}>CARS</NavLink>
                    </li>
                    <li>&nbsp;</li>
                    <li className="nav-item">
                        <NavLink style={{...largeButton}} className="nav-link btn btn-sm btn-outline-secondary" to={`${this.props.match.url}/bikes`}>BIKES</NavLink>
                    </li>
                    <li>&nbsp;</li>
                </ul>
                
                <br/>
                <Route path={`${this.props.match.path}/:vehicle`} component={CompareBox} />
                <Route exact path={`${this.props.match.path}`} render={() => (<div></div>)} />
            </div>
        );
    }
}

export default Compare;