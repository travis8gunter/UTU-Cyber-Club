import React, { useState } from 'react';
import '../styles/accomplish.scss';
const AccomplishmentItem = ({ image, title, description, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-8" onClick={() => setIsOpen(!isOpen)}>
      <img src={image} alt={title} />
      <div class="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">{title}</h3> {/* Updated with className */}
        <p className="short-description text-gray-300">{description}</p>
        {isOpen && <p className="detailed-text text-gray-300">{text}</p>}
      </div>
    </div>
  );
};

export default AccomplishmentItem;
