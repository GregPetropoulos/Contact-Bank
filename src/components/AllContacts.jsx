import React from 'react';
import Footer from './Footer';
import AllContactFilter from './AllContactFilter';

const AllContacts = ({ data }) => {
  return (
    <div className='container mx-auto'>
      <AllContactFilter data={data} />
   
      <Footer />
    </div>
  );
};

export default AllContacts;
