import React, { Component } from 'react';
import '../styles/about.scss';
import guestSpeakerImage from "../photos/guest-speaker.jpg";
import ctfImage from "../photos/ctf.jpeg";
import learnImage from "../photos/hacker.jpeg";

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
      <h1>About Us</h1>
    
      {/*Learn section */}
      <div className='learn-section'>
        <div className='learn-content'>
          <h2>We Learn</h2>
          <p>We are the Cyber Security club here at Utah Tech, and we learn and teach students how to be cyber smart and practice cyber security. Our mission is to cultivate a community of informed students who are equipped with the knowledge to protect themselves and their digital environments in the ever-evolving cyberspace.</p>
        </div>
        <img src={learnImage} alt='Learn' className='learn-image' />
      </div>
      {/*CTF section */}
      <div className='ctf-section'>
        <div className='ctf-content'>
          <h2>CTF Competitions</h2>
          <p>Our club actively participates in CTF (Capture The Flag) and other competitions, which are events focused on cybersecurity challenges that include ethical hacking challenges and problem-solving.</p>
        </div>
        <img src={ctfImage} alt='CTF' className='ctf-image' />
      </div>



      {/* Grid section */}
      <div className="team-section">
        <img src={guestSpeakerImage} alt="The Team" className="team-image" />
        <div className="team-content">
          <h2>Guest Speakers</h2>
          <p>
          Our Cyber Security Club actively invites industry experts to speak at our meetings, offering members direct insights from the field. These sessions with guest speakers are crucial for bridging the gap between theoretical knowledge and real-world practices, enriching our members understanding and preparing them for future challenges in the IT world.
          </p>
        </div>
      </div>
    </div>
  );
}
}
