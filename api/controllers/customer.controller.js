const db = require('../models');
const Customers = db.customers; // Sequelize model for customers
const Orders = db.orders;

// Create a new customer
exports.create = (req, res) => {
    const customer = {
        customer_name: req.body.customer_name,
        customer_email: req.body.customer_email,
        customer_phonenumber: req.body.customer_phonenumber
    };

    Customers.create(customer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the customer."
            });
        });
};

// Get all customers
exports.findAll = (req, res) => {
    Customers.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the customers."
            });
        });
};

// Get customer by ID
exports.findOne = (req, res) => {
    const customerId = req.params.customer_id;
    Customers.findOne({
        where: { customer_id: customerId }
    })
        .then(data => {
            if (data) {
                res.status(200).send(data);
            } else {
                res.status(404).send({
                    message: "Customer not found."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the customer."
            });
        });
};

// Update customer by ID
exports.update = (req, res) => {
    const customerId = req.params.customer_id;
    Customers.update(req.body, {
        where: { customer_id: customerId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update customer with id=${customerId}. Maybe the customer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating customer with id=" + customerId
            });
        });
};

// Delete customer by ID
exports.delete = (req, res) => {
    const customerId = req.params.customer_id;

    Customers.destroy({
        where: { customer_id: customerId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete customer with id=${customerId}. Maybe the customer was not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete customer with id=" + customerId
            });
        });
};

// Retrieve all orders for a customer
exports.findOrders = async (req, res) => {
    try {
        const { customer_id } = req.params;

        const customer = await Customers.findByPk(customer_id, {
            include: [{ model: Orders, as: "orders" }],
        });

        if (!customer) {
            return res.status(404).send({ message: "Customer not found." });
        }

        res.status(200).send(customer.orders);
    } catch (err) {
        res.status(500).send({ message: "Error retrieving orders for customer.", error: err.message });
    }
};