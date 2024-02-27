import React, { Component } from 'react';
import homeImage from '../photos/home2.jpeg';
import '../styles/home.scss';
import bsidesImage from '../photos/bsides2.jpeg';
import nclImage from '../photos/ncl.jpeg';
import ccdcImage from '../photos/CCDC.png';
import AccomplishmentItem from '../pages/accomplish.js';
import { NavLink } from 'react-router-dom';


export default class Home extends Component {
  render() {
    return (
        <div className="home-page">
        
        {/* Full viewport header image */}
        <header className="header-image">
          <img src={homeImage} alt="UTU Cyber Society" />
          <h1>Welcome to UTU Cyber Society</h1>
        </header>
        
        {/* Content below header image */}
        <section className="content-section">
        <div className='accomp-section'>
        <h2>Our Accomplishments!</h2>
        <div className='accomplishments'>
          <AccomplishmentItem 
            image={bsidesImage} 
            title="Bsides Fall 2023" 
            description="Placed 1st at the 2023 Bsides Cyber Team Competition." 
            text="we were able to asdfasdfsdfasdfasdfsafsdfasd" 
            />
          <AccomplishmentItem 
            image={nclImage} 
            title="National Cyber League Fall 2023" 
            description="Top 3% of 4500+ teams in the 2023 fall team National Cyber League Competition" 
            text="3 individuals placed in the top 3% of 8500+ players in the fall Individual Competition." 
          />
          <AccomplishmentItem 
            image={ccdcImage} 
            title="Collegiate Cyber Defense Competition 2024" 
            description="Highlights from CCDC." 
            text="Extended narrative on the competition's challenges." 
          />
        </div>
        </div>
        </section>
        <section className="join-now">
          <h2><NavLink to="/discord" className="join-link">Click Here To Join Now!</NavLink></h2>
        </section>
      </div>
    );
  }
}
