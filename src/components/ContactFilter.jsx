import { useState, useEffect, Fragment } from 'react';
import ContactDetails from './ContactDetails';
import Spinner from './Spinner';

const ContactFilter = ({ currentContacts}) => {
  const [filterText, setFilterText] = useState('');
  const [matched, setMatched] = useState([]);
  const [search, setSearch] = useState(false);
  const [isAscending, setIsAscending] = useState(false);
  const [isDescending, setIsDescending] = useState(false);
  const [isCountryCode, setIsCountryCode] = useState(false);
console.log("currentcontacts",currentContacts)
  useEffect(() => {
    // handling the search an sort functionality side effects
    // SEARCH FIELDS
    // --------------------------
    if (filterText.length > 0) {
      let dataArr = currentContacts;
      const searchArr = dataArr.filter(
        (item) =>
          item.firstName.toLowerCase() === filterText.toLowerCase() ||
          item.lastName.toLowerCase() === filterText.toLowerCase() ||
          item.email.toLowerCase() === filterText.toLowerCase()
      );
      setMatched(searchArr);
    } else {
      // setMatched('');
      setSearch(false);
    }

    // SORTING ORDERS
    // --------------------------
    if (isAscending) {
      let dataArr = currentContacts;
      const searchAscArr = dataArr.sort((a, b) =>
        a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
      );
      setMatched(searchAscArr);
      setIsAscending(false);
    }
    if (isDescending) {
      let dataArr = currentContacts;
      const searchDescArr = dataArr.sort((a, b) =>
        a.lastName < b.lastName ? 1 : b.lastName < a.lastName ? -1 : 0
      );
      setMatched(searchDescArr);
      setIsDescending(false);
    }

    if (isCountryCode) {
      let dataArr = currentContacts;
      const searchCountryCodeArr = dataArr.sort((a, b) =>
        a.countryCode > b.countryCode
          ? 1
          : b.countryCode > a.countryCode
          ? -1
          : 0
      );
      setMatched(searchCountryCodeArr);
      setIsCountryCode(false);
    }
  }, [filterText, search, isAscending, isDescending, isCountryCode]);

  const onChange = (e) => {
    if (e.target.value !== '') {
      const targetValue = e.target.value.trim();
      setFilterText(targetValue);
    } else {
      setFilterText('');
    }
  };

  return (
    <Fragment>
      <form
        onSubmit={(e) => e.preventDefault()}
        className='flex flex-col items-center'>
        <input
          type='text'
          // className='p-2 block justify-center bg-primary text-black placeholder-black placeholder-opacity-40'
          className='p-2 block bg-primary text-black placeholder-black placeholder-opacity-40'
          placeholder='Search Contacts...'
          onChange={onChange}
        />
        <div>
          <button
            className='btn btn-secondary m-3 btn-xs'
            onClick={() =>
              matched.length > 0 ? setSearch(true) : setSearch(false)
            }>
            Search
          </button>

          <div className='dropdown dropdown-hover'>
            <label tabIndex='0' className='btn-xs btn m-1'>
              Sort
            </label>
            <ul
              tabIndex='0'
              className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
              <li>
                <button onClick={() => setIsAscending(true)}>A-Z</button>
              </li>
              <li>
                <button onClick={() => setIsDescending(true)}>Z-A</button>
              </li>
              <li>
                <button onClick={() => setIsCountryCode(true)}>
                  Country Code
                </button>
              </li>
            </ul>
          </div>
        </div>
      </form>

      <div className='block m-auto'>
        <div className='flex flex-col items-center justify-center w-full m-3'>
          {search
            ? [...matched].map((item) => (
                <ContactDetails item={item} key={item.id} />
              ))
            : 
            currentContacts.map((item) => <ContactDetails item={item} key={item.id} />)}
        </div>
      </div>
    </Fragment>
  );
};

export default ContactFilter;
