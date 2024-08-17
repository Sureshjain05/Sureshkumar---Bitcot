import React, { useState } from 'react';

// AddContact component to add a new contact
const AddContact = ({ onAdd, onCancel }) => {
  // State variables to hold form input values
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setemailAddress] = useState('');
  const [address, setAddress] = useState('');
  // State variable to keep track of the next contact ID
  const [nextId, setNextId] = useState(3);
  
   // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

     // Create a new contact object with the current state values
    const newContact = {
      id : nextId,
      name,
      emailAddress,
      address,
      phoneNumber
    };
    // Call the onAdd function passed as a prop, with the new contact
    onAdd(newContact);

     // Increment the next ID for the next contact
    setNextId(nextId => nextId + 1);
  };
  
  // Input Fields for Name, EmailAddress, Address, PhoneNumber
  return (
    <div className="modal">
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Email Address"
          value={emailAddress}
          onChange={(e) => setemailAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        
        {/*Submit Button to add the new Contact */}
        <button type="submit" >Add</button>
        {/*Cancel Button to Cancel Operation */}
        <button onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddContact;
