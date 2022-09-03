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
  CLEAR_CONTACTS
} from '../types';

const contactReducer = (state, action) => {
    console.log("state",state)
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
      case ADD_CONTACT:
          console.log("action.payload",action.payload)
          return{
              ...state,
              contacts:[action.payload,...state.contacts]
        }
      case DELETE_CONTACT:
        return {
            ...state,
            contacts:state.contacts.filter(contactItem=> contactItem._id!==action.payload)
            // TODO ADD FILTER
        }
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
