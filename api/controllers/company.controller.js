const db = require("../models");
const Companies = db.companies; 

exports.create = (req, res) => {
    const company = {
        company_name: req.body.company_name,
        company_address: req.body.company_address,
        contactId: parseInt(req.params.contactId) 
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


exports.findAll = (req, res) => {

    Companies.findAll({
        where: {
            contactId: parseInt(req.params.contactId) 
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

exports.findOne = (req, res) => {
    Companies.findOne({
        where: {
            contactId: req.params.contactId,
            company_id: req.params.companyId,  
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
                    message: `Cannot delete company with id=${companyId}. Maybe the company was not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete company with id=" + companyId
            });
        });
};
