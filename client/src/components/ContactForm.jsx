import { useState } from 'react';
import { toast } from 'react-toastify';

const initialContact = {
  id: 0,
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  countryCode: ''
};
const ContactForm = ({ data, setData }) => {
  const [current, setCurrent] = useState('');
  const [contact, setContact] = useState(initialContact);
  //* de-structure contact to use in the form below
  const { id, firstName, lastName, email, phoneNumber, countryCode } = contact;

  //*Locate max Id for correct id number to add to new contact
  const idNum = data.map((item) => item.id);
  let max = Math.max(...idNum);

  const onChange = (e) => {
    setContact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      id: max + 1
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Adding one contact to state
    setData((prev) => [...prev, contact]);
    setContact(initialContact);
    toast.success('Contact Added');
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        //  className='block sm:flex sm:justify-between sm:items-center sm: w-full'
        className='flex flex-col items-center w-screen'>
        <h2 className='text-primary m-2'>
          {current ? 'Edit Contact' : 'Add Contact'}
        </h2>
        <input
          className='p-2 m-2'
          type='text'
          placeholder='First Name'
          name='firstName'
          value={firstName}
          onChange={onChange}
        />
        <input
          className='p-2 m-2'
          type='text'
          placeholder='Last Name'
          name='lastName'
          value={lastName}
          onChange={onChange}
        />
        <input
          className='p-2 m-2'
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
        />

        <input
          className='p-2 m-2'
          type='tel'
          placeholder='123-456-7890'
          name='phoneNumber'
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
          value={phoneNumber}
          onChange={onChange}
        />
        <input
          className='p-2 m-2'
          type='text'
          placeholder='Country Code'
          name='countryCode'
          value={countryCode}
          onChange={onChange}
        />
        <button className='btn btn-xs btn-accent m-2 sm:btn-md'>Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
