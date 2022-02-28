import React, {useState, useEffect} from 'react';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';



function App() {
  const LOCAL_STORAGE_KEY="contacts"
  const [contacts, setcontacts] = useState([]);

  const addContactHandler=(contact)=>{
    setcontacts([...contacts, {id:uuid(), ...contact} ]);
  };
  const removeContactHandler=(id)=>{

    const newContactList = contacts.filter((contact)=>{
      return contact.id!==id;
    });
    setcontacts(newContactList);
  };
 
 
  useEffect(()=> {
   const retrievData=JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY));
   if(retrievData) setcontacts(retrievData); 
    }, []);


  useEffect(()=> {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
 /* const contacts =[
   {
     id:"1",
     name:"Vishal",
     email:"vxb0299@gmail.com",
   },
   {
     id:"2",
     name:"Vishwa",
     email:"vishw0299@gmail.com",
   }

  ];*/
  return (
    <div className='ui container'>  
      <Header />
      <AddContact addContactHandler ={addContactHandler}/>    
      <ContactList contacts={contacts}  getContactId={removeContactHandler} /> 
    </div> //this is jsx
  );
};

export default App;
