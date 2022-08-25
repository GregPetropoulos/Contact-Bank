import { useState } from 'react';
import { toast } from 'react-toastify';

const Modal = ({ setData, data, item }) => {
  const [showModal, setShowModal] = useState(false);
  //   const { id, firstName, lastName, email, countryCode, phoneNumber } = item;

  // Place item in the state for editing via form
  const [updateInput, setUpdateInput] = useState(item);

  // Destructure the state and use these values for the form value
  const { id, firstName, lastName, email, countryCode, phoneNumber } =
    updateInput;

  const onChange = (e) => {
    setUpdateInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Update the single source of truth which is data, I match the id in the data to the newly updated object that was passed in called item. I am overwriting that object when I set the state
  const onSubmit = (e) => {
    e.preventDefault();
    const dataArr = data;
    const updateState = dataArr.map((item) =>
      item.id === id ? { ...item, ...updateInput } : item
    );
    setData(updateState);
    setShowModal(false);
    toast.success('Contact Updated');
  };

  return (
    <>
      <button
        className='btn btn-xs m-1 btn-primary'
        onClick={() => setShowModal(!showModal)}>
        Edit
      </button>
      {showModal ? (
        <>
          <div className='transition ease-in-out delay-1000'>
            <div className='  rounded w-[250px] h-[430px]  bg-primary-focus flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  '>
              
              
              {/* FORM */}
              <form
                onSubmit={onSubmit}
                className='flex flex-col items-center'>
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
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
