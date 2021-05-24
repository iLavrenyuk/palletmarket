import React from 'react';

export const Button = ({ type, text }) => (
  <button className="button" type={type}>
    {text}
  </button>
);
