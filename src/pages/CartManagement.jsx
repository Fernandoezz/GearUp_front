import React, { useState, useEffect } from "react";
import Table from "../components/table";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Replace this with your actual API endpoint to fetch products
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Transform products for the table
  const productTableData = products.map((product) => ({
    Name: product.name,
    Price: `$${product.price}`,
    Action: (
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
      >
        Add to Cart
      </button>
    ),
  }));

  // Transform cart items for the table (without update/remove options)
  const cartTableData = cart.map((item) => ({
    Name: item.name,
    Price: `$${item.price}`,
    Quantity: item.quantity,
    Total: `$${(item.price * item.quantity).toFixed(2)}`,
  }));

  return (
    <div className="flex flex-col w-full p-10">
      <h2 className="text-2xl font-semibold mb-6">Cart Management</h2>

      {/* Product List */}
      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4">Available Products</h3>
        <Table data={productTableData} />
      </div>

      {/* Cart List */}
      <div>
        <h3 className="text-xl font-medium mb-4">Your Cart</h3>
        {cart.length > 0 ? <Table data={cartTableData} /> : <p className="text-gray-500">Your cart is empty.</p>}
      </div>
    </div>
  );
};

export default Cart;
