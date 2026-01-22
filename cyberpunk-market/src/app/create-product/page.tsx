 "use client";  


import { use, useState } from "react";

export default function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: productName, // backend espera "name"
          price: Number(price),
          description,
        }),
      });

      if (res.ok) {
        setMessage("Product created successfully!");
        setProductName("");
        setPrice("");
        setDescription("");
      } else {
        setMessage("Failed to create product.");
      }
    } catch (error) {
      setMessage("An error occurred.");
    }
  }

  // O return precisa estar aqui fora
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Create New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Create Product</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
