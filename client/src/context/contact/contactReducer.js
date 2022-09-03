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
          //* return current state
          //* Must use spread operator to make a copy of the state(state is immutable), also send the data from the payload to update copied state in UI
          return{
              ...state,
              contacts:[action.payload,...state.contacts]
        }
        case UPDATE_CONTACT:
          return {
            ...state,
            contacts:state.contacts.map(item=> item._id===action.payload._id? action.payload:item)
          }
      case DELETE_CONTACT:
          //* Return all id that do not match the action payload (the id of the delete button clicked on in the ui)
        return {
            ...state,
            contacts:state.contacts.filter(contactItem=> contactItem._id!==action.payload)
            // TODO ADD FILTER
        }
        case SET_CURRENT:
          return{
            ...state,
        //* return the entire contact object from the payload which is the current object
            current:action.payload
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
