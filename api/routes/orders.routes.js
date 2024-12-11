module.exports = app => {
    const orders = require("../controllers/order.controller.js");
  
    var router = require("express").Router();
  
    // Create a new order
    router.post("/orders", orders.create);
  
    // Retrieve all orders 
    router.get("/orders", orders.findAll);
  
    // Retrieve 
    router.get("/orders/:order_id", orders.findOne);
  
    // Update
    router.put("/orders/:order_id", orders.update);

      // Retrieve the customer associated with an order
    router.get("/orders/:order_id/customer", orders.findCustomer);

    // Retrieve all items in an order
    router.get("/orders/:order_id/items", orders.findItems);
    
    // Delete an order by ID
    router.delete("/orders/:order_id", orders.delete);
  
    app.use('/api', router);
  };
  