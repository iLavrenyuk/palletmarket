import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ image, title, text, link, linkName }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        <span className="card-title">{title}</span>
        <p className="card-text">{text}</p>
        <Link to={link} className="card-link">
          {linkName}
        </Link>
      </div>
    </div>
  );
};
