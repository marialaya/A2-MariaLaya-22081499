import React, { useState, useEffect } from "react";

function Item() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [editedItem, setEditedItem] = useState({
    item_name: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/items")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error(err));
  }, []);

  const handleEdit = (item) => {
    setEditingItem(item.item_id);
    setEditedItem(item);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/items/${editingItem}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedItem),
      });

      if (!response.ok) throw new Error("Failed to update item");

      setItems((prev) =>
        prev.map((i) => (i.item_id === editingItem ? editedItem : i))
      );
      setEditingItem(null);
    } catch (err) {
      console.error(err.message);
      alert("Error updating item. Please try again.");
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.item_id}>
              {editingItem === item.item_id ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={editedItem.item_name}
                      onChange={(e) =>
                        setEditedItem({ ...editedItem, item_name: e.target.value })
                      }
                    />
                  </td>
                  
                  <td>
                    <button className="button green" onClick={handleSave}>Save</button>
                    <button className="button red" onClick={() => setEditingItem(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{item.item_name}</td>
                  <td>
                    <button className="button blue" onClick={() => handleEdit(item)}>Edit</button>
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

export default Item;
