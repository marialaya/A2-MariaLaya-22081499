const db = require('../models');
const Items = db.items;
const Orders = db.orders; 

// Create a new item
exports.create = (req, res) => {
    const item = {
        item_name: req.body.item_name,
    };

    Items.create(item)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the item."
            });
        });
};

// Get all items
exports.findAll = (req, res) => {
    Items.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the items."
            });
        });
};

// Get item by ID
exports.findOne = (req, res) => {
    const itemId = req.params.item_id;
    Items.findOne({
        where: { item_id: itemId }
    })
        .then(data => {
            if (data) {
                res.status(200).send(data);
            } else {
                res.status(404).send({
                    message: "Item not found."
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the item."
            });
        });
};

// Update item by ID
exports.update = (req, res) => {
    const itemId = req.params.item_id;
    Items.update(req.body, {
        where: { item_id: itemId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Item was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update item with id=${itemId}. Maybe the item was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating item with id=" + itemId
            });
        });
};

// Delete item by ID
exports.delete = (req, res) => {
    const itemId = req.params.item_id;

    Items.destroy({
        where: { item_id: itemId }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Item was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete item with id=${itemId}. Maybe the item was not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete item with id=" + itemId
            });
        });
};

// Retrieve all orders containing a specific item
exports.findOrders = async (req, res) => {
    try {
        const { item_id } = req.params;

        const orders = await Orders.findAll({
            where: { item_id },
        });

        if (!orders.length) {
            return res.status(404).send({ message: "No orders found for this item." });
        }

        res.status(200).send(orders);
    } catch (err) {
        res.status(500).send({ message: "Error retrieving orders for item.", error: err.message });
    }
};