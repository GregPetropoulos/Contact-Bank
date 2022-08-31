import React from 'react';
import { toast } from 'react-toastify';
import Modal from './Modal';

const ContactDetails = ({ setData, data, item }) => {
  const { id, firstName, lastName, email, countryCode, phoneNumber } = item;

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
              <Modal setData={setData} data={data} item={item} key={item.id} />

              <button
                className='btn btn-xs m-1 btn-primary'
                // in-line Delete and Toast functionality
                onClick={() => {
                  toast.error('Contact Deleted');
                  setData(data.filter((item) => item.id !== id));
                }}>
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
