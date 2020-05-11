import React from 'react';
import queryString from 'query-string';

class Search extends React.Component {
    state = {
        query   : queryString.parse(this.props.location.search).q,
        submit  : false,
        result  : []
    }

    componentDidUpdate() {
        if (this.state.submit) {
            let url = `http://45.248.149.94:8000/api/all/?search=${this.state.query}`
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        result : data
                    })
                })
            this.setState({ submit : false })
        }
    }

    componentDidMount() {
        let url = `http://45.248.149.94:8000/api/all/?search=${this.state.query}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    result : data
                })
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.query !== "") {
            this.setState({
                submit : true
            })
            this.props.history.push(`/search?q=${this.state.query}`)
        }
    }

    handleChange = (e) => {
        this.setState({
            query : e.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br/>
                        <form className="input-group" onSubmit={this.handleSubmit}>
                            <input className="form-control col-md-4" onChange={this.handleChange} type='text' value={this.state.query} placeholder="Search for any cars or bikes" />
                            <div className="input-group-append">
                                <input className="btn btn-outline-secondary" type='submit' value='Search' />
                            </div>
                        </form>
                        <br/>
                    </div>
                </div>
                {this.state.result.map(function(item) {
                    return (
                        <div className="row">
                            <div className="col-5 col-md-2 text-right">
                                <img className="img-responsive" src={item.image} width="150" alt="Vehicle" />
                            </div>
                            <div className="col-7 col-md-10">
                                <a href={`/${item.id}`}><b>{item.variant}</b></a> <br/>
                                <small>{ item.vehicle_type } • { item.displacement } CC • BDT { item.price }</small> <br/>
                                <small>Dealer: { item.dealer }</small> <br/> <br/>
                                <br/>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Search;