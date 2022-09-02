import { useState, useEffect } from 'react';
import { addContact, useContacts } from '../context/contact/ContactState';
// !STOPPED HERE NEED TO ADD IN CONTEXTAPI FOR ADDING A CONTACT

const initialContact = {
  id: 0,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  countryCode: ''
};

const AllContactFilter = () => {
  // *CONTEXTAPI
  const [contactState, contactDispatch] = useContacts();
  const { current } = contactState;
  //* Set up hook initial values for component level form state
  const [contact, setContact] = useState(initialContact);

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact(initialContact);
    }
  }, [current]);

  // Destructure local contact
  const { id, firstName, lastName, phoneNumber, email, countryCode } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  // const findOne = () => {
  //   let dataArr = contact;
  //   const searchArr = dataArr.filter(
  //     (item) =>
  //       item.firstName.toLowerCase() === current.firstName.toLowerCase() ||
  //       item.lastName.toLowerCase() === current.lastName.toLowerCase() ||
  //       item.email.toLowerCase() === current.email.toLowerCase()
  //   );
  //   setFoundContact(searchArr);
  // };
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex justify-center flex-wrap'>
        <input
          type='text'
          className=' p-2 block bg-accent text-black placeholder-black placeholder-opacity-40'
          placeholder='Search All Contacts'
          value={contact}
          onChange={onChange}
        />
        <button className=' ml-3 mt-3 btn btn-xs btn-primary' onClick={()=>console.log("need to finish this up")}>
          Search
        </button>
      </div>
      {current!==null? (
        contact.map((item) => (
          <div
            className=' card card-compact bg-secondary-focus text-primary w-1/2 shadow-xl my-3 sm:m-3'
            key={item.id}>
            <div className='card-body'>
              <h2 className='flex flex-col items-start card-title'>
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
    </div>
  );
};

export default AllContactFilter;
