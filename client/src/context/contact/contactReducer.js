
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
  } from '../types';

const contactReducer = (state,action) => {
switch(action.type){
case GET_CONTACTS:
return {
    ...state,
    contacts:action.payload
}
case CONTACT_ERROR:
    return {
        ...state,
        error:action.payload
    }
    default:
        throw new Error(`Unsupported type of: ${action.type}`);
}
}

export default contactReducer