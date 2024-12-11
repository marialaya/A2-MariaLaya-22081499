import { useState, useEffect } from "react";
import Customer from "./components/Customer";
import Item from "./components/Item";
import Order from "./components/Order";
import "./App.css";

function App() {
  const [customers, setCustomers] = useState([]);
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  // Fetch customers
  useEffect(() => {
    fetch("http://localhost:8080/api/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => {
        console.error("Error fetching customers:", error);
      });
  }, []);

  // Fetch items
  useEffect(() => {
    fetch("http://localhost:8080/api/items")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  // Fetch orders
  useEffect(() => {
    fetch("http://localhost:8080/api/orders")
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return (
    <div className="page">
      <h1>Maria's Store Management Dashboard</h1>
      <div className="section">
        <h2>Customers</h2>
        <Customer customers={customers} setCustomers={setCustomers} />
      </div>
      <div className="section">
        <h2>Items</h2>
        <Item items={items} setItems={setItems} />
      </div>
      <div className="section">
        <h2>Orders</h2>
        <Order orders={orders} setOrders={setOrders} />
      </div>
    </div>
  );
}

export default App;
