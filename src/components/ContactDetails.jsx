import React from 'react';

const ContactDetails = ({ item }) => {
  const { firstName, lastName, email, countryCode, phoneNumber } = item;
  return (
    <>
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
              <button
                className='btn btn-xs m-1 btn-primary'
                onClick={() => console.log('Edit Work In Progress')}>
                Edit
              </button>
              <button
                className='btn btn-xs m-1 btn-primary'
                onClick={() => console.log('Delete Work In Progress')}>
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
