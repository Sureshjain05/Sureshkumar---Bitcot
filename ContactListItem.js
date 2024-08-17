import React from 'react';

// ContactListItem component to display an individual contact in a list
const ContactListItem = ({ contact, onEdit, onView, onDelete }) => (
  <li>
    <span>{contact.id}</span>
    <span>{contact.name}  - {contact.phoneNumber}</span>
    <button onClick={() => onView(contact)}>👁️</button>
    <button onClick={() => onEdit(contact)}>✏️</button>
    <button onClick={() => onDelete(contact.id)}>🗑️</button>
  </li>
);

export default ContactListItem;
      