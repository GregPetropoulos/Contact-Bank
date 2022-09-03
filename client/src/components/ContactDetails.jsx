import React from 'react';
import { toast } from 'react-toastify';
import Modal from './Modal';
import { deleteContact, useContacts } from '../context/contact/ContactState';

const ContactDetails = ({ contactItem }) => {
  // Only need the dispatch not the state
  const contactDispatch = useContacts()[1];

  const { _id, firstName, lastName, email, countryCode, phoneNumber } =
    contactItem;

  const onDelete = () => {
    toast.error('Contact Deleted');
    deleteContact(contactDispatch, _id);
  };
  return (
    <>
      {/* // Not matched cards per page  */}
      <div className='card card-compact bg-secondary shadow-xl my-3 sm:m-4'>
        <div className='card-body'>
          <h2 className='card-title'>
            {firstName} {lastName}
          </h2>

          <a href={`tel:${phoneNumber}`}>
            <p>{`Phone: ${phoneNumber}`}</p>
          </a>
          <a href={`mailto:${email}`}>{`Email: ${email}`}</a>
          <small>{`Country Code: ${countryCode}`}</small>
          <div className='card-actions justify-end'>
            <a href={`mailto:${email} `}>
              <button className='btn btn-xs m-1 btn-primary'>
                Send A Message
              </button>
            </a>
            <div className='btn-group justify-between'>
              <Modal contactItem={contactItem}  />
              <button className='btn btn-xs m-1 btn-primary' onClick={onDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
