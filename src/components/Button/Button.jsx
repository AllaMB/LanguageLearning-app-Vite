import React from 'react';
import style from './Button.module.scss';

const Button = ({ onClick, children }) => {
    return (
      <button className="button" onClick={onClick}>
        {children}
      </button>
    );
  };
  
  export default Button;