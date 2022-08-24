import React from 'react';

const PaginationContacts = ({ currentContacts }) => {
  const dataAll = currentContacts;
  return (
    <>
      <hr />
      <h1>Paging of Contacts</h1>
      {dataAll.map((item) => (
        <div className='card w-96 bg-base-100 shadow-xl' key={item.id}>
          <div className='card-body'>
            <h2 className='card-title'>
              {item.firstName} {item.lastName}
            </h2>
            <p>{`Phone: ${item.phoneNumber}`}</p>
            <a href={`mailto:${item.email}`}>{`Email: ${item.email}`}</a>
            <small>{`Country Code: ${item.countryCode}`}</small>
            <div className='card-actions justify-end'>
              <a href={`mailto:${item.email} `}>
                <button className='btn btn-primary'>Send A Message</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PaginationContacts;
