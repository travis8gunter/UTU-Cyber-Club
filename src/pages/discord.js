import React from 'react';
import qrCodeImage from '../photos/qrcode-UTU-Discord.png';
import '../styles/discord.scss';

const Discord = () => {
  return (
    <div className="discord-container">
      <h1 className="discord-title">Join Our Discord Server</h1>
      <p className="discord-description">Scan the QR code below to join:</p>
      <img src={qrCodeImage} alt="Discord QR Code" className="discord-qr-code" />
      <p className="discord-link-text">Or click the link below to join:</p>
      <a href="https://discord.gg/PrzsTzWK3q" className="discord-link">Join our Discord</a>
    </div>
  );
};

export default Discord;
