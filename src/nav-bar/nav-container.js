import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class NavContainer extends Component {
  render() {
    return (
      <div className='nav-wrapper'>
        <nav>
            <NavLink exact to='/' activeClassName="active">Home</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/showcase" activeClassName="active">Showcase</NavLink>
            <NavLink to="/discord" activeClassName="active">Discord</NavLink>
        </nav>
        
      </div>
    );
  }
}
