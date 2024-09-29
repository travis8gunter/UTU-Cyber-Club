import React, { Component } from 'react';
//import homeImage from '../photos/home2.jpeg';
import '../styles/home.scss';
import bsidesImage from '../photos/bsides2.jpeg';
import nclImage from '../photos/ncl.jpeg';
import ccdcImage from '../photos/CCDC.png';
import nclSpring2024 from '../photos/NCL-spring2024.png'
import AccomplishmentItem from '../pages/accomplish.js';
import homeImage from '../photos/identify.jpg';
import { NavLink } from 'react-router-dom';


export default class Home extends Component {
  render() {
    return (
        <div className="home-page">
        
        {/* Full header image */}
        <header className="header-image">
          <img src={homeImage} alt="UTU Cyber Club" />
          <h1>Welcome to UTU Cyber Club Homepage</h1>
        </header>
        
        {/* Content below header image */}
        <section className="content-section">

          {/* Meeting Time Section */}
          <div className="meeting-time-section">
            <h2>Meeting Time</h2>
            <p>Join us every Thursday at 7:00 PM in room 107 of the Smith building.</p>
          </div>
        <br/>
          {/* Accomplishments section */}
        <div className='accomp-section'>
        <h2>Our Accomplishments!</h2>
        <div className='accomplishments'>
          <AccomplishmentItem 
            image={bsidesImage} 
            title="Bsides Fall 2023" 
            description="Placed 1st at the 2023 Bsides Cyber Team Competition. ( Click here to learn more ) " 
            text="Our team competed in the Bsides St George cyber security conference CTF competition and we won the competiton coming in 1st place!" 
            />
          <AccomplishmentItem 
            image={nclImage} 
            title="National Cyber League Fall 2023" 
            description="Top 3% of 4500+ teams in the 2023 fall team National Cyber League Competition. ( Click here to learn more )" 
            text="Our team competed in the National Cyber Leauge CTF Individual and Team competitions. We had 3 individuals placed in the top 3% of 8500+ players in the fall Individual Competition. Our Team placed top 3% in the team competition out of 4500+ teams! " 
          />
          <AccomplishmentItem 
            image={nclSpring2024} 
            title="National Cyber League Spring 2024." 
            description="Our team participated and placed top 66 of 4199 teams( Click here to learn more )" 
            text="Our team participated in the National Cyber League team and individual competitions in Spring 2024, and all our members placed in the top 1000 out of 7000 players during the individual competition and placed 66th place on the team. Through these competitions, we honed our skills in port scanning, digital forensics, network traffic analysis, log analysis, password cracking, open-source intelligence, and web application exploits. This experience provided valuable hands-on learning and teamwork, preparing us for real-world cybersecurity challenges." 
          />
          <AccomplishmentItem 
            image={ccdcImage} 
            title="Collegiate Cyber Defense Competition 2024." 
            description="Highlights from CCDC. ( Click here to learn more )" 
            text="Our team had the opportunity to compete in the Collegiate Cyber Defense Competition where we had different machines spanning from linux OS to Windows. We were tasked with hardening them and defending them in a small business simulation from a Professional Red Team! " 
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
