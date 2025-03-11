import React from 'react';
import DynamicForm from '../components/form';

const Home = () => {
  const userFields = [
    { name: 'fullName', label: 'Full Name', placeholder: 'Enter your full name', required: true },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', required: true },
    { name: 'password', label: 'Password', placeholder: 'password', required: true },
    { name: 'contactNumber', label: 'Contact Number', placeholder: '+123456789', required: true },
    
  ];

  const handleSubmit = (data) => {
    console.log('Submitted user data:', data);
    // Implement your submission logic here, e.g., API call
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">User Management</h2>
        <DynamicForm
          fields={userFields}
          initialValues={{
            fullName: '',
            email: '',
            password: '',
            contactNumber: '',
          }}
          onSubmit={handleSubmit}
          buttonText="Save and Continue"
        />
      </div>
    </div>
  );
};

export default Home;