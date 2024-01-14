import ContactList from "./ContactList";
import { useState } from "react";
import EditContact from "./EditContact";
import { initialContacts } from "./data";


export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);
  const selectedContact = contacts.find((c) => c.id === selectedId);

  const updateContact = (id, name, email) => {
    setContacts(contacts.map((item) => item.id === id ? {id, name, email} : item));
  }
  
  const inter = {
    contacts,
    setContacts,
    selectedId,
    setSelectedId,
    selectedContact,
    initialContacts,
    updateContact,
  };

  return (<>
    <ContactList inter={inter} />
    <hr/>
    <EditContact key={selectedId} inter={inter} />
  </>)
}
