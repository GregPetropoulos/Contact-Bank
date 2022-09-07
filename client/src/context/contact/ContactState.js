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
  CONTACT_ERROR,
  CURRENT_CONTACTS_PER_PAGE,
  SORT_ORDER
} from '../types';

// Create a custom hook to use the contact context
export const useContacts = () => {
  const { state, dispatch } = useContext(ContactContext);
  return [state, dispatch];
};

//*GET ALL CONTACTS
export const getAllContacts = async (dispatch) => {
  try {
    const response = await fetch('api/contacts');
    const data = await response.json();
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

//* ADD CONTACT
export const addContact = async (dispatch, contact) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contact)
  };
  try {
    const response = await fetch('api/contacts', options);
    const data = await response.json();
    dispatch({
      type: ADD_CONTACT,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg
    });
  }
};

// * EDIT CONTACT
export const editContact = async (dispatch, contact) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contact)
  };
  try {
    const response = await fetch(`api/contacts/${contact._id}`, options);
    const data = await response.json();
    dispatch({
      type: UPDATE_CONTACT,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg
    });
  }
};

//* DELETE A CONTACT
export const deleteContact = async (dispatch, id) => {
  const options = {
    method: 'DELETE'
    // headers:{},
  };
  try {
    const response = await fetch(`api/contacts/${id}`, options);
    const data = await response.json();
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: CONTACT_ERROR,
      payload: err.response.msg
    });
  }
};

//*SET CURRENT CONTACT STATE
export const setCurrent = async (dispatch, contact) => {
  dispatch({
    type: SET_CURRENT,
    payload: contact
  });
};

// * SEARCH FUNCTIONALITY ON ALL SEARCH PAGE
export const filterContacts = (dispatch, text) => {
  dispatch({
    type: FILTER_CONTACTS,
    payload: text
  });
};
export const clearFilter = (dispatch) => {
  //*dispatch will send the action.type, payload data, an object current null
  dispatch({
    type: CLEAR_FILTER
  });
};
// * SORT CONTACTS
export const sortOrder = (dispatch, contactsSorted) => {
  dispatch({
    type: SORT_ORDER,
    payload: contactsSorted
  });
};

//*PAGINATION
export const setCurrentContactsPerPage = async (
  dispatch,
  currentContactsOnPage
) => {
  dispatch({
    type: CURRENT_CONTACTS_PER_PAGE,
    payload: currentContactsOnPage
  });
};

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    current: null,
    contactsPerPage: null,
    filtered: null,
    error: null
  };
  //   The engine running the state against changes
  const [state, dispatch] = useReducer(contactReducer, initialState);
  return (
    <ContactContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
