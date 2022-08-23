import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='flex justify-center m-3 w-full'>
      <div className='btn-group'>
        <Link to='/'>
          <button className='btn btn-xs m-2'>1</button>
        </Link>
        <Link to='/contact-details'>
          <button className='btn btn-xs m-2 btn-active'>2</button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
