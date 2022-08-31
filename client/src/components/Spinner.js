import React from 'react';
import book from './assets/images/book.gif';

const Spinner = () => (
  <img
    src={book}
    style={{ width: '200px', margin: 'auto', display: 'block' }}
    alt='Loading...'
  />
);

export default Spinner;
