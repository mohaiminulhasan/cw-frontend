import React from 'react';

class VehicleDetail extends React.Component {
    state = {
        data : []
    }

    componentDidMount() {
        fetch(`http://45.248.149.94:8000/api/vehicle/${this.props.match.params.vehicleId}/`)
            .then(response => response.json())
            .then(data => this.setState({
                data : data
            }))
    }

    goBack() {
        window.history.back();
    }

    render() {
        const { data } = this.state;

        return (
            <div className="container">
                {/* <br/>
                <div className="row">
                    <div className="col-sm">
                        <a href="#0" onClick={ this.goBack }>Go back to search result</a>
                    </div>
                </div> */}
                <br/> <br/>
                
                { data !== [] && 
                <div className="row">
                    <div className="col-sm-4">
                        {/* <img src="http://via.placeholder.com/300x200/000/fff" alt="Vehicle" /> */}
                        <img src={ data.image } alt="Vehicle" width="300" />
                    </div>

                    <div className="col-sm-8">
                        <h3>{ data.variant }</h3>
                        <h6>Country: { data.country_of_assembly }</h6>
                        <h6>Dealer: { data.dealer }</h6>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default VehicleDetail;