import React, { useState } from 'react';
import Spinner from './Spinner';
import {
  useContacts,
  filterContacts,
  clearFilter
} from '../context/contact/ContactState';
import ContactDetails from './ContactDetails';

const AllContacts = () => {
  const [contactState, contactDispatch] = useContacts();
  const { contacts, filtered, contactsPerPage } = contactState;
  const [inputText, setInputText] = useState('');

  const onChange = (e) => {
    let searchText = e.target.value;
    setInputText(searchText);
    if (searchText !== '') {
      filterContacts(contactDispatch, searchText);
    } else {
      clearFilter(contactDispatch);
      setInputText('');
    }
  };

  return (
    <>
      <div className='flex justify-center mt-4'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <input
            type='text'
            className='p-2 block bg-primary text-black placeholder-black placeholder-opacity-40 input input-bordered input-secondary w-full max-w-xs'
            value={inputText}
            placeholder='Search Contacts'
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
              {contactsPerPage !== null &&
                contactsPerPage.map((contactItem) => (
                  <ContactDetails
                    key={contactItem._id}
                    contactItem={contactItem}
                  />
                ))}
            </>
          )
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
};

export default AllContacts;
