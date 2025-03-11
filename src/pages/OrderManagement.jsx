import React from 'react';
import DynamicForm from '../components/form';

const OrderManagement = () => {
  const orderFields = [
    { name: 'recipientName', label: 'Recipient Name', placeholder: 'Enter recipient name', required: true },
    { name: 'addressLine1', label: 'Address Line 1', placeholder: 'Enter address line 1', required: true },
    { name: 'addressLine2', label: 'Address Line 2', placeholder: 'Enter address line 2 (optional)' },
    { name: 'city', label: 'City', placeholder: 'Enter city', required: true },
    { name: 'postalCode', label: 'Postal Code', placeholder: 'Enter postal code', required: true },
    { name: 'contactNumber', label: 'Contact Number', placeholder: '+123456789', required: true },
  ];

  const handleOrderSubmit = (data) => {
    console.log('Order submitted:', data);
    // Implement order submission logic here, e.g., API call
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">Order Management</h2>
        <DynamicForm
          fields={orderFields}
          initialValues={{
            recipientName: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            postalCode: '',
            contactNumber: '',
          }}
          onSubmit={handleOrderSubmit}
          buttonText="Confirm Order"
        />
      </div>
    </div>
  );
};

export default OrderManagement;