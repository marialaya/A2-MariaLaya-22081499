const db = require("../models");
const Companies = db.companies; // Reference the 'Company' model

// Create a new company
exports.create = (req, res) => {
    const company = {
        company_name: req.body.company_name,
        company_address: req.body.company_address,
        contactId: parseInt(req.params.contactId) // Ensure contactId is passed in params
    };

    Companies.create(company)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the company."
            });
        });
};

// Get all companies for a specific contact
exports.findAll = (req, res) => {

    Companies.findAll({
        where: {
            contactId: parseInt(req.params.contactId) // Ensure we're fetching by the contact ID
        }
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the companies."
            });
        });
};

// Get a specific company by contactId and companyId
exports.findOne = (req, res) => {
    Companies.findOne({
        where: {
            contactId: req.params.contactId,
            company_id: req.params.companyId,  // Use company_id as defined in your model
        }
    })
        .then(data => {
            if (data) {
                res.status(200).send(data);
            } else {
                res.status(404).send({
                    message: "Company not found."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the company."
            });
        });
};

// Update a specific company by ID
exports.update = (req, res) => {
   const companyId = req.params.companyId;

    Companies.update(req.body, {
        where: { company_id: companyId, contactId: req.params.contactId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Company was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update company with id=${id}. Maybe the company was not found or req.body is empty!`,
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating company with id=" + id
            });
        });
};

// Delete a specific company by ID
exports.delete = (req, res) => {
    const companyId = req.params.companyId;

    Companies.destroy({
        where: { company_id: companyId, contactId: req.params.contactId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Company was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete company with id=${id}. Maybe the company was not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete company with id=" + id
            });
        });
};
