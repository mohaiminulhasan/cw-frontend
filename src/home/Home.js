import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    state = {
        query : ''
    }

    handleChange = (e) => {
        this.setState({
            query : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.query !== "") {
            this.props.history.push(`/search?q=${this.state.query}`);
        }
    }

    render() {
        const searchStyle = {
            width: '100%',
            borderWidth: 0,
            boxShadow: '0px 0px 20px 1px rgba(0,0,0,0.25)',
            outline: 'none',
            padding: 10
        }

        const buttonStyle = {
            width: 100,
            marginLeft: 'auto',
            marginRight: 0
        }

        const outerDivStyle = {
            marginLeft: 'auto', marginRight: 'auto', marginTop: '28vh'}

        return (
            <div className="col-sm-6 text-center" style={{...outerDivStyle}}>
                <Link className="no-decoration" to="/"><span style={{ fontFamily: 'Squada One', color: 'black', fontSize: '3em' }}>compare<span style={{ color: 'red' }}>wheelz</span></span></Link>
                <form method='get' onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.query} style={{...searchStyle}} type='text' name='q' autoFocus={true} placeholder="Search for any cars or bikes" />
                    <br/><br/>
                    <p className="text-right">
                        <input type='submit' value='Search' style={{...buttonStyle}} className='btn btn-secondary' />
                    </p>
                </form>
            </div>
        );
    }
}

export default Home;