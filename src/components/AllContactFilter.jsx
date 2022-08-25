import { useState } from 'react';

const AllContactFilter = ({ data }) => {
  const [all, setAll] = useState('');
  const [foundContact, setFoundContact] = useState([]);
  // console.log(foundContact);
  // console.log(foundContact.length)
  const { firstName, lastName, email, phoneNumber } = foundContact;

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
      <div className='block justify-center '>
        Search All
        <input
          type='text'
          className='m-2 p-2 block bg-accent text-black placeholder-black placeholder-opacity-40'
          placeholder='Search All Contacts'
          onChange={onChange}
        />
        <button className='m-3 btn btn-xs btn-primary' onClick={findOne}>
          Search
        </button>
        <p>{firstName}</p>
        {/* {foundContact.length>0&&(<ul>
            <li>
                {firstName}
                </li>
                <li>
                    {lastName}
                </li>
                <li>
                    {email}
                </li>
                <li>
                    {phoneNumber}
                </li>
                </ul>)} */}
      </div>
    </>
  );
};

export default AllContactFilter;
