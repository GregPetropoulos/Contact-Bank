import React from 'react';
import Footer from './Footer';
import AllContactFilter from './AllContactFilter';

const AllContacts = ({ data }) => {
  return (
    <div className=''>
      <AllContactFilter data={data} />
   
      <Footer />
    </div>
  );
};

export default AllContacts;
