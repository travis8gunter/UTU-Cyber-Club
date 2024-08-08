import React from 'react';
import '../styles/showcase.scss';

import bsidesImage from '../photos/bsideswin.jpg'; 
import nccdc from '../photos/NCCDC 2.png';
import guestImage from '../photos/gueest-speaker2.jpg';
import NCL from '../photos/NCL-TEAM1 2.jpg';


const showcaseItems = [
  {
    id: 1,
    imageUrl: NCL,
    title: 'National Cyber League Spring 2024',
    description: 'Our team participated in the National Cyber League team and individual competitions in Spring 2024, and all our members placed in the top 1000 out of 7000 players during the individual competition and placed 66th place on the team. Through these competitions, we honed our skills in port scanning, digital forensics, network traffic analysis, log analysis, password cracking, open-source intelligence, and web application exploits. This experience provided valuable hands-on learning and teamwork, preparing us for real-world cybersecurity challenges.'
  },
  {
    id: 2,
    imageUrl: nccdc,
    title: 'Collegiate Cyber Defense Competition 2024',
    description: 'Our team competed at the Collegiate Cyber Defense Compeitition (NCCDC) a defensive cyber security competition. We learned a lot, ate snacks and drank mountain dew.'
  },
  {
    id: 3,
    imageUrl: bsidesImage,
    title: 'Bsides St George Fall 2023',
    description: 'Our team competed and won 1st place out of several teams at the Bsides St George cyber security conference. '
  },
  {
    id: 4,
    imageUrl: guestImage,
    title: 'Guest Speaker Alan Fox, Director of Network Services at UTU',
    description: "In a recent club session, we welcomed Alan Fox, the Director of Network Services at our university. With extensive experience in networking and cyber security, Mr. Fox offered insights into his career and the challenges of managing complex network infrastructures. His presentation highlighted the importance of network services for the university's security and inspired us with real-world examples and practical advice. Mr. Fox's dedication and expertise motivated us to pursue excellence in the IT and security fields."
  },
  // Add more items here
];

const Showcase = () => {
  return (
    <div className="showcase">
      {showcaseItems.map(item => (
        <div key={item.id} className="showcase-item">
            <h2>{item.title}</h2>
          <img src={item.imageUrl} alt={item.title} />
          
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
