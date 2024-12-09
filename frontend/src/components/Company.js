import { useState } from "react";

function Company(props) {
    const { contact, company, companies, setCompanies } = props;

    // State for inline editing
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(company.company_name);
    const [editedAddress, setEditedAddress] = useState(company.company_address);

    // Delete company function
    async function deleteCompany() {
        try {
            const response = await fetch(
                `http://localhost/api/contacts/${contact.id}/companies/${company.id}`,
                { method: "DELETE" }
            );

            if (response.ok) {
                const newCompanies = companies.filter((p) => p.id !== company.id);
                setCompanies(newCompanies);
            } else {
                console.error("Failed to delete company");
            }
        } catch (error) {
            console.error("Error deleting company:", error);
        }
    }

    // Update company function
    async function updateCompany(event) {
        event.preventDefault();

        try {
            const response = await fetch(
                `http://localhost/api/contacts/${contact.id}/companies/${company.id}`,
                {
                    method: "PATCH", // Or use "PUT" if you prefer
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        company_name: editedName,
                        company_address: editedAddress,
                    }),
                }
            );

            if (response.ok) {
                const updatedCompany = await response.json();

                // Update the companies state with the modified company
                const newCompanies = companies.map((p) =>
                    p.id === company.id ? updatedCompany : p
                );

                setCompanies(newCompanies);
                setIsEditing(false); // Exit edit mode
            } else {
                console.error("Failed to update company");
            }
        } catch (error) {
            console.error("Error updating company:", error);
        }
    }

    return (
        <tr>
            {/* Conditional rendering: show edit form or static row */}
            {isEditing ? (
                <>
                    <td>
                        <input
                            type="text"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            value={editedAddress}
                            onChange={(e) => setEditedAddress(e.target.value)}
                        />
                    </td>
                    <td>
                        <button className="button green" onClick={updateCompany}>
                            Save
                        </button>
                        <button
                            className="button gray"
                            onClick={() => setIsEditing(false)}
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
                            className="button yellow"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit
                        </button>
                        <button className="button red" onClick={deleteCompany}>
                            Delete
                        </button>
                    </td>
                </>
            )}
        </tr>
    );
}

export default Company;
