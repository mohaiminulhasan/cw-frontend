import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
      const navStyle = {
        backgroundColor: 'transparent',
        borderBottom: 'solid',
        borderWidth: 1,
        borderImage: '-webkit-linear-gradient(0deg,transparent 3%,black 50%,transparent 97%) 20 stretch'
      }
      return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{...navStyle}}>
          {(window.location.pathname !== "/") && <Link className="navbar-brand" to="/"><span style={{ fontFamily: 'Squada One', fontSize: '1.3em' }}>compare<span style={{ color: 'red' }}>wheelz</span></span></Link>}
          {(window.location.pathname === "/") && <Link className="navbar-brand" to="/"><span style={{ fontFamily: 'Squada One', fontSize: '1.3em', color: 'transparent' }}>comparewheelz</span></Link>}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div style={{ fontFamily: 'Roboto', textTransform: 'uppercase', fontSize: '0.8em' }} className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/compare">Compare</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }

  export default Navbar;