import { useState } from 'react';
import Pagination from './Pagination';
import ContactFilter from './ContactFilter';
import Footer from './Footer'

const Home = ({ data, setData }) => {
  console.log(data);

// Handling the pages state
const [currentPage, SetCurrentPage] = useState(1);
const [contactsPerPage] = useState(100);
const dataArr=data
const indexOfLastContact =currentPage*contactsPerPage;
const indexOfFirstContact=indexOfLastContact-contactsPerPage;
const currentContacts= dataArr.slice(indexOfFirstContact,indexOfLastContact)

const paginate=(pageNumber)=> SetCurrentPage(pageNumber)
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center'>
      <ContactFilter currentContacts={currentContacts}/>
      <Pagination contactsPerPage={contactsPerPage} totalContacts={data.length} paginate={paginate}/>
      <Footer/>
      </div>
    </div>
  );
};

export default Home;
