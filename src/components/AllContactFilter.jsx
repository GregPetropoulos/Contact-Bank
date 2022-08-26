import { useState } from 'react';

const AllContactFilter = ({ data }) => {
  const [all, setAll] = useState('');
  const [foundContact, setFoundContact] = useState([
    {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      countryCode: ''
    }
  ]);


  const onChange = (e) => {
    if (e.target.value !== '') {
      const targetValue = e.target.value.trim();
      setAll(targetValue);
    } else {
      setAll('');
    }
  };
  const findOne = () => {
    let dataArr = data;
    const searchArr = dataArr.filter(
      (item) =>
        item.firstName.toLowerCase() === all.toLowerCase() ||
        item.lastName.toLowerCase() === all.toLowerCase() ||
        item.email.toLowerCase() === all.toLowerCase()
    );
    setFoundContact(searchArr);
  };
  return (
    <>
      <div className='block justify-center'>
        <h1 className='m-4'>
          Search All
          </h1>
        <input
          type='text'
          className='m-4 p-2 block bg-accent text-black placeholder-black placeholder-opacity-40'
          placeholder='Search All Contacts'
          onChange={onChange}
        />
        <button className='m-4 btn btn-xs btn-primary' onClick={findOne}>
          Search
        </button>
      </div>
      {foundContact.length > 0 ? (
        foundContact.map((item) => (
          <div
            className='card card-compact bg-secondary-focus text-primary w-screen shadow-xl my-3 sm:m-4'
            key={item.id}>
            <div className='card-body'>
              <h2 className='flex flex-col card-title'>
                <span>{`First Name: ${item.firstName}`}</span>
                <span>{`Last Name: ${item.lastName} `}</span>
              </h2>

              <a href={`tel:${item.phoneNumber}`}>
                <p>{`Phone: ${item.phoneNumber}`}</p>
              </a>
              <a href={`mailto:${item.email}`}>{`Email: ${item.email}`}</a>
              <small>{`Country Code: ${item.countryCode}`}</small>
            </div>
          </div>
        ))
      ) : (
        <h1>No User Found</h1>
      )}
    </>
  );
};

export default AllContactFilter;
