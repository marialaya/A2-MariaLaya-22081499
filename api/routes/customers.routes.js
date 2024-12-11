module.exports = app => {
    const customers = require("../controllers/customer.controller.js");
  
    var router = require("express").Router();
  
    // Create a new customer
    router.post("/customers", customers.create);
  
    // Retrieve all customers
    router.get("/customers", customers.findAll);
  
    // Retrieve a single customer by ID
    router.get("/customers/:customer_id", customers.findOne);
  
    // Update a customer by ID
    router.put("/customers/:customer_id", customers.update);
  
    // Delete a customer by ID
    router.delete("/customers/:customer_id", customers.delete);

    router.get("/customers/:customer_id/orders", customers.findOrders);
  
    app.use('/api', router);
  };
  
