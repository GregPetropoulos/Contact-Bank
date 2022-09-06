import React from 'react';
import Footer from './Footer';
import Spinner from './Spinner';
import {
  useContacts,
  filterContacts,
  clearFilter
} from '../context/contact/ContactState';
import ContactDetails from './ContactDetails';

const AllContacts = () => {
  const [contactState, contactDispatch] = useContacts();
  const { contacts, filtered } = contactState;

  const onChange = (e) => {
    const searchText = e.target.value;
    if (searchText !== '') {
      filterContacts(contactDispatch, searchText);
    } else {
      clearFilter(contactDispatch);
    }
  };

  return (
       <> 
<div className='flex justify-center mt-4'>

        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type='text'
            className='p-2 block bg-primary text-black placeholder-black placeholder-opacity-40 input input-bordered input-secondary w-full max-w-xs'
            placeholder='Filter Contacts'
            onChange={onChange}
            />
        </form>
            </div>
    <div className='flex flex-col items-center justify-center m-3 sm:flex-wrap sm:flex-row '>
        {contacts !== null ? (
          filtered !== null ? (
            <>
              {filtered.map((contactItem) => (
                <div key={contactItem._id}>
                  <ContactDetails contactItem={contactItem} />
                </div>
              ))}
            </>
          ) : (
            <>
              {contacts.map((contactItem) => (
                <ContactDetails contactItem={contactItem} />
              ))}
            </>
          )
        ) : (
          <Spinner />
        )}

      <Footer />
    </div>
    </> 

  );
};

export default AllContacts;
