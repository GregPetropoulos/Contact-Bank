import { useReducer, useContext } from 'react';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR
} from '../types';

// Create a custom hook to use the contact context
export const useContacts = () => {
  const { state, dispatch } = useContext(ContactContext);
  return [state, dispatch];
};

//*GET CONTACTS-getting all of the users contacts
export const getAllContacts = async (dispatch) => {
  try {
    const response = await fetch('api/contacts');
    const data = await response.json();
    const contactData = data;
    console.log('getAllContacts--response', response);
    console.log('getAllContacts--data', data);
    dispatch({
      type: GET_CONTACTS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg
    });
  }
};

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);
  return (
    <ContactContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
