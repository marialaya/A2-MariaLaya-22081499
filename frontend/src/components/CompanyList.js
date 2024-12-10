import React from "react";
import Company from "./Company.js";
import NewCompany from "./NewCompany.js";

function CompanyList({ contact, companies, setCompanies }) {
  return (
    <div className="company-list" onClick={(e) => e.stopPropagation()}>
      <NewCompany
        contact={contact}
        companies={companies}
        setCompanies={setCompanies}
      />

      <table>
        
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Company Address</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {companies.length > 0 ? (
            companies.map((company) => (
              <Company
                key={company.company_id}
                company={company}
                companies={companies}
                setCompanies={setCompanies}
                contact={contact}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                No companies added yet
              </td>
            </tr>
          )}
        </tbody>

      </table>

    </div>
  );
}

export default CompanyList;
