import { useState, useEffect, Fragment } from 'react';
import ContactDetails from './ContactDetails';
import AllContacts from './AllContacts';
import {
  useContacts,
  getAllContacts,
  sortOrder
} from '../context/contact/ContactState';

const ContactFilter = () => {
  //* CONTEXTAPI
  //Bring in custom hook
  const [contactState, contactDispatch] = useContacts();
  //destructure setter of custom hook to use state variable through out component
  const { contacts } = contactState;

  // LOCAL STATE FOR SORTING
  const [isAscending, setIsAscending] = useState(false);
  const [isDescending, setIsDescending] = useState(false);
  const [isCountryCode, setIsCountryCode] = useState(false);

  useEffect(() => {
    if (contacts === null) {
      getAllContacts(contactDispatch);
    }

    // SORTING ORDERS
    // --------------------------
    sortOrder(contactDispatch, filterOrders());

    return () => {};
  }, [contactDispatch, isAscending, isDescending, isCountryCode]);

  //*SORTING FUNCTIONS AND LOGIC

  const filterOrders = () => {
    const dataArr = contacts;

    // ASCENDING LOGIC
    if (isAscending) {
      const searchAscArr = dataArr.sort((a, b) =>
        a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
      );

      return searchAscArr;
    }

    // DESCENDING LOGIC
    if (isDescending) {
      const searchDescArr = dataArr.sort((a, b) =>
        a.lastName < b.lastName ? 1 : b.lastName < a.lastName ? -1 : 0
      );
      return searchDescArr;
    }

    // COUNTRY CODE LOGIC
    if (isCountryCode) {
      const searchCountryCodeArr = dataArr.sort((a, b) =>
        a.countryCode > b.countryCode
          ? 1
          : b.countryCode > a.countryCode
          ? -1
          : 0
      );
      return searchCountryCodeArr;
    }
    return contacts;
  };
  
  return (
    <Fragment>
      <div>
        <h1 className='text-sm text-center leading-relaxed m-3'>
          Search by first name, last name or email
        </h1>
        <div className='dropdown dropdown-hover'>
          <label tabIndex='0' className='btn-xs btn-secondary btn m-1'>
            Sort
          </label>
          <ul
            tabIndex='0'
            className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <button
                onClick={(e) => {
                  setIsAscending(true);
                  setIsDescending(false);
                  setIsCountryCode(false);
                }}>
                Last Name A-Z
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  setIsDescending(true);
                  setIsAscending(false);
                  setIsCountryCode(false);
                }}>
                Last Name Z-A
              </button>
            </li>
            <li>
              <button
                onClick={(e) => {
                  setIsCountryCode(true);
                  setIsDescending(false);
                  setIsAscending(false);
                }}>
                Country Code
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center m-3 sm:flex-wrap sm:flex-row '>
        {isAscending
          ? contacts.map((contactItem) => (
              <ContactDetails contactItem={contactItem} key={contactItem._id} />
            ))
          : isDescending
          ? contacts.map((contactItem) => (
              <ContactDetails key={contactItem._id} contactItem={contactItem} />
            ))
          : isCountryCode
          ? contacts.map((contactItem) => (
              <ContactDetails key={contactItem._id} contactItem={contactItem} />
            ))
          :  <AllContacts />}
       
      </div>
    </Fragment>
  );
};

export default ContactFilter;
