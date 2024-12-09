import Company from './Company.js';
import NewCompany from './NewCompany.js';

function CompanyList(props) {
    const {contact, companies=[], setCompanies} = props;

	return (
        <div className='company-list'>
            <NewCompany companies={companies} setCompanies={setCompanies} contact={contact} />

            <table onClick={(e) => e.stopPropagation()}>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Company Address</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {companies.length > 0 ? (
                        companies.map((company) => {
                            return (
                                <Company key={company.id} company={company} companies={companies} setCompanies={setCompanies} contact={contact} />
                            );
                        })): (
                        <tr>
                            <td colSpan="3" style={{ textAlign: 'center' }}>
                            Company Number Not Added
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
	);
}

export default CompanyList;