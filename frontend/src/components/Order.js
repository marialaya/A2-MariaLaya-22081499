import React, { useState, useEffect } from "react";

function Order() {
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);
  const [editedOrder, setEditedOrder] = useState({
    order_date: "",
    customer_id: "",
    item_id: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error(err));
  }, []);

  const handleEdit = (order) => {
    setEditingOrder(order.order_id);
    setEditedOrder(order);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/orders/${editingOrder}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedOrder),
      });

      if (!response.ok) throw new Error("Failed to update order");

      setOrders((prev) =>
        prev.map((o) => (o.order_id === editingOrder ? editedOrder : o))
      );
      setEditingOrder(null);
    } catch (err) {
      console.error(err.message);
      alert("Error updating order. Please try again.");
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Order Date</th>
            <th>Customer ID</th>
            <th>Item ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.order_id}>
              {editingOrder === order.order_id ? (
                <>
                  <td>
                    <input
                      type="date"
                      value={editedOrder.order_date}
                      onChange={(e) =>
                        setEditedOrder({ ...editedOrder, order_date: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={editedOrder.customer_id}
                      onChange={(e) =>
                        setEditedOrder({ ...editedOrder, customer_id: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={editedOrder.item_id}
                      onChange={(e) =>
                        setEditedOrder({ ...editedOrder, item_id: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <button className="button green" onClick={handleSave}>Save</button>
                    <button className="button red" onClick={() => setEditingOrder(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{order.order_date}</td>
                  <td>{order.customer_id}</td>
                  <td>{order.item_id}</td>
                  <td>
                    <button className="button blue" onClick={() => handleEdit(order)}>Edit</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Order;
