import { useState, useEffect } from 'react';
import ContactFilter from './ContactFilter';
import ContactForm from './ContactForm';
import Contact from './Contact'


const Home = ({ data }) => {
  console.log(data);

  return (
    <div className='grid-2'>
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter  data={data}/>
        <Contact data={data}/>
      </div>

      <div>{}</div>
    </div>
  );
};

export default Home;
