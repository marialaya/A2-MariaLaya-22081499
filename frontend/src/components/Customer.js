import React, { useState, useEffect } from "react";

function Customer() {
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [editedCustomer, setEditedCustomer] = useState({
    customer_name: "",
    customer_email: "",
    customer_phonenumber: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((err) => console.error(err));
  }, []);

  const handleEdit = (customer) => {
    setEditingCustomer(customer.customer_id);
    setEditedCustomer(customer);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/customers/${editingCustomer}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedCustomer),
      });

      if (!response.ok) throw new Error("Failed to update customer");

      setCustomers((prev) =>
        prev.map((c) => (c.customer_id === editingCustomer ? editedCustomer : c))
      );
      setEditingCustomer(null);
    } catch (err) {
      console.error(err.message);
      alert("Error updating customer. Please try again.");
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.customer_id}>
              {editingCustomer === customer.customer_id ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={editedCustomer.customer_name}
                      onChange={(e) =>
                        setEditedCustomer({ ...editedCustomer, customer_name: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      value={editedCustomer.customer_email}
                      onChange={(e) =>
                        setEditedCustomer({ ...editedCustomer, customer_email: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editedCustomer.customer_phonenumber}
                      onChange={(e) =>
                        setEditedCustomer({ ...editedCustomer, customer_phonenumber: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <button className="button green" onClick={handleSave}>Save</button>
                    <button className="button red" onClick={() => setEditingCustomer(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{customer.customer_name}</td>
                  <td>{customer.customer_email}</td>
                  <td>{customer.customer_phonenumber}</td>
                  <td>
                    <button className="button blue" onClick={() => handleEdit(customer)}>Edit</button>
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

export default Customer;

