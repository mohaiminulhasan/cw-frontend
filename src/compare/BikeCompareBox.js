import React from 'react';

import BikeSelector from './BikeSelector';
import CompareTable from './CompareTable';


class BikeCompareBox extends React.Component {
    state = {
        brands          : [],

        displayTable    : false,

        a_id            : 0,
        b_id            : 0,
        c_id            : 0,

        a_data          : {},
        b_data          : {},
        c_data          : {}
    }

    compareClick = () => {
        const { a_id, b_id, c_id } = this.state;

        if (a_id === 0 && b_id === 0 && c_id === 0) {
            // don't show table, which will be blank if shown
        } else {
            this.setState({ displayTable : true });
        }
        
        
        if (a_id > 0) {
            fetch(`http://45.248.149.94:8000/api/vehicle/${a_id}/`)
                .then(response => response.json())
                .then(data => this.setState({
                    a_data : data
                }))
        }

        if (b_id > 0) {
            let url = `http://45.248.149.94:8000/api/vehicle/${b_id}/`;
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({
                    b_data : data
                }))
        }

        if (c_id > 0) {
            fetch(`http://45.248.149.94:8000/api/vehicle/${c_id}/`)
                .then(response => response.json())
                .then(data => this.setState({
                    c_data : data
                }))
        }
    }

    getVehicleId = (column, brand, model, variant) => {
        let idVar = column + '_id';
        fetch(`http://45.248.149.94:8000/api/${variant}/`)
        .then(response => response.json())
        .then(data => this.setState({
            [idVar] : data.id
        }))
    }

    componentDidMount() {
        fetch('http://45.248.149.94:8000/api/brands/bike/')
            .then(response => response.json())
            .then(brands => this.setState({ brands : brands }))
    }

    render() {
        const { a_data, b_data, c_data, displayTable } = this.state;
        return (
            <div className="container">
                <table className="table">
                <tbody className="compareControl">
                    <tr>
                        <td></td>
                        <th className="text-center">1st Bike</th>
                        <th className="text-center">2nd Bike</th>
                        <th className="text-center">3rd Bike</th>
                    </tr>
                    <tr>
                        <td></td>
                        <BikeSelector column='a' brands={ this.state.brands } getVehicleId={ this.getVehicleId } />
                        <BikeSelector column='b' brands={ this.state.brands } getVehicleId={ this.getVehicleId } />
                        <BikeSelector column='c' brands={ this.state.brands } getVehicleId={ this.getVehicleId } />
                    </tr>
    
                    <tr>
                        <td colSpan="4">
                            <button onClick={ this.compareClick } className="btn btn-secondary col-sm-4">Compare</button>
                        </td>
                    </tr>
                </tbody>
                </table>
            
                { displayTable ? <CompareTable a_data={ a_data } b_data={ b_data } c_data={ c_data } /> : null }
            </div>
        );
    }
}

export default BikeCompareBox;