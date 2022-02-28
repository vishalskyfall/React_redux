import { CREATE_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT } from "../constants/types"



//action
//export const addContact = (contact ) =>{
  //  return {
    //  type : CREATE_CONTACT,
      //payload : contact,
    //}
  //} uper vala ne avi biji rite lakhay
  export const addContact = (contact ) =>({
      type : CREATE_CONTACT,
      payload : contact,
    }
  );


  //get a contact in edit contact 
  export const getContact = (id) => ({
    type: GET_CONTACT,
    payload:id,
  });



  //update contact
  export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload : contact,
  });

//delete mate
  export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload:id,
  });
  
  
  