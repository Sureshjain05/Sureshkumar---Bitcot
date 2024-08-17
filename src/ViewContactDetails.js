import React from 'react';

// ViewContactDetails component to display details of a contact
const ViewContactDetails = ({ contact, onClose }) => (
  <div className="modal">
    <h2>Contact Details</h2>
    <p><strong>Name:</strong> {contact.name}</p>
    <p><strong>Email Address:</strong> {contact.emailAddress}</p>
    <p><strong>Address:</strong> {contact.address}</p>
    <p><strong>Phone Number:</strong> {contact.phoneNumber}</p>
    <button onClick={onClose}>Close</button>
  </div>
);

export default ViewContactDetails;
