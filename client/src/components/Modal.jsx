import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import {
  editContact,
  useContacts,
  setCurrent
} from '../context/contact/ContactState';

const Modal = ({ contactItem }) => {
  // *CONTEXTAPI
  const [contactState, contactDispatch] = useContacts();
  const { contacts, current } = contactState;

  const [showModal, setShowModal] = useState(false);

  // Place item in the state for editing via form
  const [updateInput, setUpdateInput] = useState('');

  //  Watching for current changes (once edit button is clicked) then setting local state with those changes
  useEffect(() => {
    if (current !== null) {
      setUpdateInput(current);
    } else {
      setUpdateInput(contactItem);
    }
  }, [current]);

  // Destructure the local state and use these values for the form value
  const { firstName, lastName, email, countryCode, phoneNumber } = updateInput;

  const onChange = (e) => {
    // See Local state changes in UI IN REALTIME
    setUpdateInput({ ...updateInput, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //  sending the local state changes to the contextAPI thus database updates via backend
    editContact(contactDispatch, updateInput);
    setShowModal(false);
    toast.success('Contact Updated');
  };

  // First step in edit process, Setting the current state variable when the user clicks on the edit button, useEffect will  run since it's watch the current variable setting local state to current contact object
  const openModalSetCurrent = () => {
    setShowModal(!showModal);
    setCurrent(contactDispatch, contactItem);
  };
  return (
    <>
      <button
        className='btn btn-xs m-1 btn-primary'
        onClick={openModalSetCurrent}>
        Edit
      </button>
      {contacts !== null && showModal ? (
        <>
          <div className='transition ease-in-out delay-1000'>
            <div className='  rounded w-[250px] h-[430px]  bg-primary-focus flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  '>
              {/* FORM--Can not have a from tag inside of form tag this must  be a div tag*/}
              <div onSubmit={onSubmit} className='flex flex-col items-center'>
                <h1 className='text-lg font-bold '>{`Edit ${firstName} ${lastName} `}</h1>
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
                <div className='flex flex-row-reverse'>
                  <button
                    onClick={onSubmit}
                    className='btn btn-xs btn-secondary m-2 sm:btn-md'>
                    Submit
                  </button>
                  <button
                    className='btn btn-xs bg-error m-2 sm:btn-md'
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
