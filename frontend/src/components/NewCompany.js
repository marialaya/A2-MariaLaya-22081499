import React, { useState } from 'react';

function NewCompany({ companies, setCompanies }) {
    const [company_name, setCompanyName] = useState('');
    const [company_address, setCompanyAddress] = useState('');

    const createCompany = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost/api/companies', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ company_name: company_name, company_address: company_address, contact_id: contactId }),
        });

        const data = await response.json();
        if (data.id) {
            setCompanies([...companies, data]);
            setCompanyName('');
            setCompanyAddress('');
        }
    };

    return (
        <form className='new-company' onSubmit={createCompany}>
            <input
                type="text"
                placeholder="Company Name"
                value={company_name}
                onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Company Address"
                value={company_address}
                onChange={(e) => setCompanyAddress(e.target.value)}
            />
            <button className='button green' type="submit">Add Company</button>
        </form>
    );
}

export default NewCompany;