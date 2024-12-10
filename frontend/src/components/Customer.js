import { useState } from "react";

function Company({ contact, company, companies, setCompanies }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCompanyName, setEditedCompanyName] = useState(company.company_name);
  const [editedCompanyAddress, setEditedCompanyAddress] = useState(company.company_address);

  const deleteCompany = async () => {
    try {
      const response = await fetch(
        `http://localhost/api/contacts/${contact.id}/companies/${company.company_id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) throw new Error("Failed to delete company");

      const updatedCompanies = companies.filter(
        (c) => c.company_id !== company.company_id
      );
      setCompanies(updatedCompanies);
    } catch (error) {
      console.error(error.message);
      alert("Error deleting company. Please try again.");
    }
  };

  const updateCompany = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost/api/contacts/${contact.id}/companies/${company.company_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            company_name: editedCompanyName,
            company_address: editedCompanyAddress,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to update company");

      const updatedCompanies = companies.map((c) =>
        c.company_id === company.company_id
            ? { ...c, company_name: editedCompanyName, company_address: editedCompanyAddress }
            : c
    );

        setCompanies(updatedCompanies);
        setIsEditing(false);

    } catch (error) {
        console.error(error.message);
        alert("Error updating company. Please try again.");
    }
  };

  return (
    <tr>
    
      {isEditing ? (
        <>
          <td>
            <input
              type="text"
              value={editedCompanyName}
              onChange={(e) => setEditedCompanyName(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </td>
          <td>
            <input
              type="text"
              value={editedCompanyAddress}
              onChange={(e) => setEditedCompanyAddress(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </td>
          <td>
            <button 
                className="button green" 
                onClick={(e) => {
                    e.stopPropagation();
                    updateCompany(e);
                }}
            >
              Save
            </button>
            <button
                className="button red"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsEditing(false);
              }}
                
            >
              Cancel
            </button>
          </td>
        </>
      ) : (
        <>
          <td>{company.company_name}</td>
          <td>{company.company_address}</td>
          <td>
            <button
              className="button blue"
              onClick={(e) => {
                e.stopPropagation();
                setIsEditing(true);
              }}
            >
              Edit
            </button>
            <button
              className="button red"
              onClick={(e) => {
                e.stopPropagation(); 
                deleteCompany();
            }}
        >
              Delete
            </button>
          </td>
        </>
      )}
    </tr>
  );
}

export default Company;
