import React from 'react';
import qrCodeImage from '../photos/frame.png';
import '../styles/discord.scss';

const Discord = () => {
  return (
    <div className="discord-container">
      <h1 className="discord-title">Join Our Discord Server</h1>
      <p className="discord-description">Scan the QR code below to join:</p>
      <img src={qrCodeImage} alt="Discord QR Code" className="discord-qr-code" />
    </div>
  );
};

export default Discord;
