import React from 'react';
import ContactListItem from './ContactListItem';

const ContactsView = ({ contacts, onEdit, onView, onDelete, onAdd }) => (
  <div className="contacts-view">
    <h1>Contacts</h1>
    <button onClick={onAdd}>Add Contact</button>
    <ul>
      {contacts.map((contact,index) => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          onEdit={onEdit}
          onView={onView}
          onDelete={onDelete}
        />
      ))}
    </ul>
  </div>
);

export default ContactsView;
