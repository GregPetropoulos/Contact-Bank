import { useState } from 'react';
import PaginationContacts from './PaginationContacts';
import Pagination from './Pagination';
import ContactFilter from './ContactFilter';
import ContactForm from './ContactForm';
// import Contact from './Contact'


const Home = ({ data, setData }) => {
  console.log(data);

  const [currentPage, SetCurrentPage] = useState(1);
  const [contactsPerPage, SetContactsPerPage] = useState(50);
const dataArr=data
const indexOfLastContact =currentPage*contactsPerPage;
const indexOfFirstContact=indexOfLastContact-contactsPerPage;
const currentContacts= dataArr.slice(indexOfFirstContact,indexOfLastContact)

const paginate=(pageNumber)=> SetCurrentPage(pageNumber)
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col justify-center items-center'>
        <ContactForm data={data} setData={setData} />
        <ContactFilter data={data} setData={setData} />
      </div>
      <PaginationContacts currentContacts={currentContacts}/>
      <Pagination contactsPerPage={contactsPerPage} totalContacts={data.length} paginate={paginate}/>
    </div>
  );
};

export default Home;
