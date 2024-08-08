import React, { Component } from 'react';
import '../styles/about.scss';
import guestSpeakerImage from "../photos/guest-speaker.jpg";
import ctfImage from "../photos/ctf.jpeg";
import learnImage from "../photos/NCL-TEAM-2.jpeg";
import jobs from '../photos/about-img.jpeg';

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h1>About Us</h1>

        {/* Learn Section */}
        <div className='about-section learn-section'>
          <h2>We Learn</h2>
          <p>We are the Cyber Security club here at Utah Tech, and we learn and teach students how to be cyber smart and practice cyber security. Our mission is to cultivate a community of informed students who are equipped with the knowledge to protect themselves and their digital environments in the ever-evolving cyberspace.</p>
          <img src={learnImage} alt='Learn' />
        </div>

        {/* CTF Section */}
        <div className='about-section ctf-section'>
          <h2>CTF Competitions</h2>
          <p>Our club actively participates in CTF (Capture The Flag) and other competitions, which are events focused on cybersecurity challenges that include ethical hacking challenges and problem-solving.</p>
          <img src={ctfImage} alt='CTF' />
        </div>

        {/* Skill Development and Employment Section */}
        <div className='about-section employment-section'>
          <h2>Skill Development and Employment</h2>
          <p>Our club is dedicated to helping students develop the skills needed to get hired in the tech industry. We offer training and practical experience in various areas of cybersecurity. Many of our previous club members have successfully secured positions as system administrators, SOC analysts, and security engineers. Our hands-on approach and industry connections provide our members with a solid foundation for their careers.</p>
          <img src={jobs} alt='Jobs' />
        </div>

        {/* Guest Speakers Section */}
        <div className="about-section team-section">
          <h2>Guest Speakers</h2>
          <p>Our Cyber Security Club actively invites industry experts to speak at our meetings, offering members direct insights from the field. These sessions with guest speakers are crucial for bridging the gap between theoretical knowledge and real-world practices, enriching our members' understanding and preparing them for future challenges in the IT world.</p>
          <img src={guestSpeakerImage} alt="The Team" />
        </div>
      </div>
    );
  }
}

