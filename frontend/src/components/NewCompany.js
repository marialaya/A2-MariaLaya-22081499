import React, { useState } from "react";

function NewCompany({ contact, companies, setCompanies }) {
  const [newName, setNewName] = useState("");
  const [newAddress, setNewAddress] = useState("");

  async function createCompany(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost/api/contacts/${contact.id}/companies`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company_name: newName,
            company_address: newAddress,
          }),
        }
      );

      if (response.ok) {
        const newCompany = await response.json();
        setCompanies([...companies, newCompany]);
        setNewName("");
        setNewAddress("");
      } else {
        console.error("Failed to create company:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating company:", error);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); 
        e.stopPropagation(); 
        createCompany(e);
      }}
      className="new-company"
      
    >
    <input
        type="text"
        placeholder="Company Name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
    />
    <input
        type="text"
        placeholder="Company Address"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
    />
    <button 
        className="button green" 
        type="submit" 
        onClick={(e) => {
        e.stopPropagation();
        }}
    >
        Add {contact.name}'s Company
      </button>
    </form>
  );
}

export default NewCompany;
