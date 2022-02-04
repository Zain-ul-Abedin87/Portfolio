import React from 'react';
import "./Button.scss"
const Button = ({text,href,newTab,className}) => {
  return <div className={className}>
   <a className='main-button' href={href} target={newTab && "_blank"}>
       {text}
   </a>
  </div>;
};

export default Button;
