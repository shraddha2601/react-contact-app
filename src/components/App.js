import React, {useState} from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([])
  // const contacts = [
  //   {
  //     id : "1",
  //     name : "shraddha",
  //     email : "shraddha@gmail.com"
  //   },
  //   {
  //     id : "2",
  //     name : "shreya",
  //     email : "shreya@gmail.com"
  //   },
  //   {
  //     id : "3",
  //     name : "khushali",
  //     email : "khushali@gmail.com"
  //   },
  // ]
  return (
   <div className="ui container">
    <Header/>
    <AddContact/> 
    <ContactList contacts={contacts}/>
   </div>
  );
}

export default App;
