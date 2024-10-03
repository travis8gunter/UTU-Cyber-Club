import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class NavContainer extends Component {
  render() {
    return (
      <div className='nav-wrapper'>
        <nav className="hidden sm:flex flex-row gap-8">
            <NavLink exact to='/' className={({isActive}) => [ isActive ? "text-logo-blue underline" : "hover:text-logo-blue hover:underline", "underline-offset-4 transition-all duration-500"].join(" ")}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => [ isActive ? "text-logo-blue underline" : "hover:text-logo-blue hover:underline", "underline-offset-4 transition-all duration-500"].join(" ")}>About</NavLink>
            <NavLink to="/showcase" className={({isActive}) => [ isActive ? "text-logo-blue underline" : "hover:text-logo-blue hover:underline", "underline-offset-4 transition-all duration-500"].join(" ")}>Showcase</NavLink>
            <NavLink to="/discord" className={({isActive}) => [ isActive ? "text-logo-blue underline" : "hover:text-logo-blue hover:underline", "underline-offset-4 transition-all duration-500"].join(" ")}>Discord</NavLink>
        </nav>
        
      </div>
    );
  }
}
