import React, {useState, useEffect} from "react";
// import {uuid} from "uuidv4";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts"; 
  const [contacts, setContacts] = useState([]);
  console.log(localStorage.getItem('contacts'));

  const addContactHandler = (contact) =>{
    console.log(contact);
    setContacts([...contacts, contact])
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...contacts, contact]));

  }

  const removeContactHandler = (id) =>{
    const newContactList = contacts.filter((contact) =>{
      return contact.id !==id;
    })
    setContacts(newContactList);
  }


  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  return (
   <div className="ui container">
    <Header/>
    <AddContact addContactHandler={addContactHandler}/> 
    <ContactList contacts={contacts}/>
    {/* <ContactList contacts={contacts} getContactId = {removeContactHandler}/> */}
   </div>
  );
}

export default App;
