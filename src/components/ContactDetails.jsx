import React from 'react';

const ContactDetails = ({ item }) => {
  // console.log("item",item)
  const { firstName, lastName, email, countryCode, phoneNumber } = item;
  return (
    <div className='flex justify-around m-5'>

    <div className='card w-96 bg-secondary shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>
          {firstName} {lastName}
        </h2>
        <p>{`Phone: ${phoneNumber}`}</p>
        <a href={`mailto:${email}`}>{`Email: ${email}`}</a>
        <small>{`Country Code: ${countryCode}`}</small>
        <div className='card-actions justify-end'>
          <a href={`mailto:${email} `}>
            <button className='btn btn-primary'>Send A Message</button>
          </a>
        </div>
      </div>
    </div>
    </div>

  );
};

export default ContactDetails;
