import React, { useState } from 'react';
import '../styles/accomplish.scss';
const AccomplishmentItem = ({ image, title, description, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accomplishment-item" onClick={() => setIsOpen(!isOpen)}>
      <img src={image} alt={title} />
      <h3 className="item-title">{title}</h3> {/* Updated with className */}
      <p className="short-description">{description}</p> {/* Already correctly classified */}
      {isOpen && <p className="detailed-text">{text}</p>}
    </div>
  );
};

export default AccomplishmentItem;
