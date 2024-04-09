import React from 'react'
import "./CustomButton.scss";

const CustomButton = ({ type, children, size, onClick }) => {
    const buttonClass = `button ${type} ${size}`;
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton
