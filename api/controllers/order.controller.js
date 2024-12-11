const db = require('../models');
const Orders = db.orders; // Sequelize model for orders
const Customers = db.customers;
const Items = db.items;

// Create a new order
exports.create = (req, res) => {
    const order = {
        customer_id: req.body.customer_id,
        item_id: req.body.item_id,
        order_date: req.body.order_date
    };

    Orders.create(order)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the order."
            });
        });
};

// Get all orders
exports.findAll = (req, res) => {
    Orders.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the orders."
            });
        });
};

// Get order by ID
exports.findOne = (req, res) => {
    const orderId = req.params.order_id;
    Orders.findOne({
        where: { order_id: orderId }
    })
        .then(data => {
            if (data) {
                res.status(200).send(data);
            } else {
                res.status(404).send({
                    message: "Order not found."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the order."
            });
        });
};

// Update order by ID
exports.update = (req, res) => {
    const orderId = req.params.order_id;
    Orders.update(req.body, {
        where: { order_id: orderId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Order was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update order with id=${orderId}. Maybe the order was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating order with id=" + orderId
            });
        });
};

// Delete order by ID
exports.delete = (req, res) => {
    const orderId = req.params.order_id;

    Orders.destroy({
        where: { order_id: orderId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Order was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete order with id=${orderId}. Maybe the order was not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete order with id=" + orderId
            });
        });
};

// Retrieve the customer associated with an order
exports.findCustomer = async (req, res) => {
    try {
        const { order_id } = req.params;

        const order = await Orders.findByPk(order_id, {
            include: [{ model: Customers, as: "customer" }],
        });

        if (!order) {
            return res.status(404).send({ message: "Order not found." });
        }

        res.status(200).send(order.customer);
    } catch (err) {
        res.status(500).send({ message: "Error retrieving customer for order.", error: err.message });
    }
};

// Retrieve all items in an order
exports.findItems = async (req, res) => {
    try {
        const { order_id } = req.params;

        const order = await Orders.findByPk(order_id, {
            include: [{ model: Items, as: "item" }],
        });

        if (!order) {
            return res.status(404).send({ message: "Order not found." });
        }

        res.status(200).send(order.item);
    } catch (err) {
        res.status(500).send({ message: "Error retrieving items for order.", error: err.message });
    }
};
