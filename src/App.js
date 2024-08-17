import React, { useState, useEffect } from 'react';
import ContactsView from './components/ContactsView';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import ViewContactDetails from './components/ViewContactDetails';
import SearchContact from './components/SearchContact';
import ContactListItem from './components/ContactListItem';

function App() {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Aaron ", phoneNumber: "5785664545", emailAddress: "aaron@gmail.com" },
    { id: 2, name: "Buincy ", phoneNumber: "5785664545", emailAddress: "hanson@gmail.com" }
  ]);

  const [currentContact, setCurrentContact] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [nextId, setNextId] = useState(0);
  

  const getNextId = () => {
    if (contacts.length === 0) return 1; // Start from 1 if there are no contacts
    // Find the highest current ID
    const highestId = Math.max(...contacts.map(contact => contact.id));
    setNextId(highestId + 1); // Next ID is highest ID + 1
  };

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
    setIsAdding(false);
  };

  const handleEditContact = (updatedContact) => {
    const updatedContacts = contacts.map(contact =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    setContacts(updatedContacts);
    setIsEditing(false);
  };

  const handleDeleteContact = (id) => {
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    setContacts(filteredContacts);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phoneNumber.includes(searchTerm)
  );
  
  return (
    <div className="App">      
      <SearchContact searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ContactsView
        contacts={filteredContacts}
        onEdit={(contact) => { setSelectedContact(contact); setIsEditing(true); }}
        onView={(contact) => { setSelectedContact(contact); setIsViewing(true); }}
        onDelete={handleDeleteContact}
        onAdd={() => setIsAdding(true)}
      />
      {isAdding && <AddContact onAdd={handleAddContact} onCancel={() => setIsAdding(false)} />}
      {isEditing && <EditContact contact={selectedContact} onEdit={handleEditContact} onCancel={() => setIsEditing(false)} />}
      {isViewing && <ViewContactDetails contact={selectedContact} onClose={() => setIsViewing(false)} />}
    </div>
  );
}

export default App;
