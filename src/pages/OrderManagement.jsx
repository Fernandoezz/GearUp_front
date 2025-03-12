import React, { useState } from 'react';
import DynamicForm from '../components/form';
import { saveOrder } from "../API/OrderApi";

const OrderManagement = () => {
  const orderFields = [
    { name: 'name', label: 'Recipient Name', placeholder: 'Enter recipient name', required: true },
    { name: 'addressLine1', label: 'Address Line 1', placeholder: 'Enter address line 1', required: true },
    { name: 'addressLine2', label: 'Address Line 2', placeholder: 'Enter address line 2 (optional)' },
    { name: 'city', label: 'City', placeholder: 'Enter city', required: true },
    { name: 'postalCode', label: 'Postal Code', placeholder: 'Enter postal code', required: true },
    { name: 'phone', label: 'Contact Number', placeholder: '+123456789', required: true },
  ];

  const [newOrder, setNewOrder] = useState({
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  const [successMessage, setSuccessMessage] = useState(""); // ✅ Added success message state

  const handleSubmit = async (values) => {
    try {
      await saveOrder(values);
      setSuccessMessage("✅ Order placed successfully!");
      
      // Clear form after submission
      setNewOrder({
        name: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        postalCode: "",
        phone: "",
      });

      // Remove success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      
    } catch (error) {
      console.error("Order submission error:", error);
      alert("❌ Failed to place order. Check console for details.");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="w-full max-w-xl p-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-6 text-center">Order Management</h2>

        {/* ✅ Display success message */}
        {successMessage && (
          <div className="mb-4 p-3 bg-green-100 text-green-800 border border-green-400 rounded text-center">
            {successMessage}
          </div>
        )}

        <DynamicForm
          fields={orderFields}
          initialValues={newOrder}
          onSubmit={handleSubmit}
          buttonText="Confirm Order"
        />
      </div>
    </div>
  );
};

export default OrderManagement;
