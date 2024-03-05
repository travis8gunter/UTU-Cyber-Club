import React from 'react';
import '../styles/showcase.scss';

import bsidesImage from '../photos/bsideswin.jpg'; 
import nccdc from '../photos/NCCDC 2.png';


const showcaseItems = [
  {
    id: 1,
    imageUrl: bsidesImage,
    title: 'Bsides St George Fall 2023',
    description: 'Our team competed and won 1st place out of several teams at the Bsides St George cyber security conference. '
  },
  {
    id: 2,
    imageUrl: nccdc,
    title: 'Collegiate Cyber Defense Competition 2024',
    description: 'Our team competed at the Collegiate Cyber Defense Compeitition (NCCDC) a defensive cyber security competition. We learned a lot, ate snacks and drank mountain dew.'
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
