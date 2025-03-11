import React, { useState, useEffect } from 'react';

const CartManagement = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Replace this with your actual API endpoint to fetch products
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col w-full p-10">
      <h2 className="text-2xl font-semibold mb-6">Cart Management</h2>

      <div className="mb-8">
        <h3 className="text-xl font-medium mb-4">Available Products</h3>
        <ul className="space-y-2">
          {products.map((product) => (
            <li key={product.id} className="flex justify-between items-center p-2 border rounded-md">
              <span>{product.name} - ${product.price}</span>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-medium mb-4">Your Cart</h3>
        <ul className="space-y-2">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center p-2 border rounded-md">
              <span>
                {item.name} - ${item.price} x {item.quantity}
              </span>
              <div>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="border rounded-md w-16 text-center"
                  min="1"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-2 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartManagement;