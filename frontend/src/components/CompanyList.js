import React, { useEffect, useState } from 'react';
import NewCompany from './NewCompany.js';
import Company from './Company.js';

function CompanyList( ) {
    const [companies, setCompanies] = useState([]);

     // Fetch companies when the component is mounted
     useEffect(() => {
        if (contact?.id) {
            fetch(`http://localhost/api/contacts/${contact.id}/companies`)
                .then((res) => res.json())
                .then((data) => setCompanies(data))
                .catch((error) => console.error('Error fetching companies:', error));
        }
    }, [contact]);

    // Delete a company
    const deleteCompany = async (id) => {
        try {
            const response = await fetch(`http://localhost/api/contacts/${contact.id}/companies/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setCompanies((prevCompanies) => prevCompanies.filter((company) => company.id !== id));
            } else {
                console.error('Failed to delete company:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting company:', error);
        }
    };


    return (
        <div>
            <h2>Companies for {contact?.name}</h2>
            <NewCompany contact={contact} companies={companies} setCompanies={setCompanies} />

{/* Display companies in a table */}
<table>
    <thead>
        <tr>
            <th>Company Name</th>
            <th>Company Address</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        {companies.map((company) => (
            <tr key={company.id}>
                <td>{company.company_name}</td>
                <td>{company.company_address}</td>
                <td>
                    <button onClick={() => deleteCompany(company.id)} className="button red">
                        Delete
                    </button>
                </td>
            </tr>
        ))}
    </tbody>
</table>
</div>
);
}

export default CompanyList;
