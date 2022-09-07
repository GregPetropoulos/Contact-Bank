import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  useContacts,clearFilter,
  setCurrentContactsPerPage
} from '../context/contact/ContactState';
// * KEEP IN MIND THERE ARE TWO SEPARATE FUNCTIONS NAMED SETCURRENTPAGE

const Pagination = () => {
  // *CONTEXTAPI
  const [contactState, contactDispatch] = useContacts();
  const { contacts } = contactState;

  // Handling the local pages state
  const [currentPage, SetCurrentPage] = useState(1);
  const [contactsPerPage] = useState(50);

  useEffect(() => {
    if (contacts !== null) {
      const dataArr = contacts;
      const indexOfLastContact = currentPage * contactsPerPage;
      const indexOfFirstContact = indexOfLastContact - contactsPerPage;
      const currentContactsOnPage =
        contacts !== null &&
        dataArr.slice(indexOfFirstContact, indexOfLastContact);
        // If any state change to the current page then update the context api contactsPerPage array
      setCurrentContactsPerPage(contactDispatch, currentContactsOnPage);
    }
  }, [contacts,currentPage]);

  const pageNumbers = [];
  // Loop through total contacts per page and push the caclulated number into array to get correct number of pages
  const totalContacts = contacts !== null && contacts.length;

  for (let i = 1; i <= Math.ceil(totalContacts / contactsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='navbar justify-center'>
      <ul className='flex justify-center items-center flex-wrap '>
        {pageNumbers.length > 0 &&
          pageNumbers.map((number) => (
            <li key={number} className='btn btn-group m-1'>
              <Link
                to='#'
                className='btn btn-xs m-1'
                onClick={() => {SetCurrentPage(number);clearFilter(contactDispatch);}}
                alt='paging'>
                {number}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Pagination;
