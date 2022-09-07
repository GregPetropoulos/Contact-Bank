import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CONTACT_ERROR,
  CLEAR_CONTACTS,
  CURRENT_CONTACTS_PER_PAGE,
  SORT_ORDER
} from '../types';

const contactReducer = (state, action) => {
  switch (action.type) {
    // * CRUD OPS
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case ADD_CONTACT:
      //* return current state
      //* Must use spread operator to make a copy of the state(state is immutable), also send the data from the payload to update copied state in UI
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((item) =>
          item._id === action.payload._id ? action.payload : item
        )
      };
    case DELETE_CONTACT:
      //* Return all id that do not match the action payload (the id of the delete button clicked on in the ui)
      return {
        ...state,
        contacts: state.contacts.filter(
          (contactItem) => contactItem._id !== action.payload
        )
      };
    // *NON CRUD OPS
    case SET_CURRENT:
      return {
        ...state,
        //* return the entire contact object from the payload which is the current object
        current: action.payload
      };
    case CURRENT_CONTACTS_PER_PAGE:
      return {
        ...state,
        contactsPerPage: action.payload
      };

    // *SEARCH/FILTER
    case FILTER_CONTACTS:
      return {
        ...state,
        //* Take filtered part of state set to initial contacts and run filter method on it
        filtered: state.contacts.filter(({ firstName, lastName, email }) => {
          const testString = `${firstName}${lastName}${email}`.toLowerCase();
          return testString.includes(action.payload.toLowerCase());
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    //* SORT 0RDER
    case SORT_ORDER:
      return {
        ...state,
        contacts: action.payload
      };
    case CONTACT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      throw new Error(`Unsupported type of: ${action.type} in contactReducer`);
  }
};

export default contactReducer;
