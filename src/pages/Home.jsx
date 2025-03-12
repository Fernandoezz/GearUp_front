import React from 'react';
import { registerUser } from '../API/UserApi';
import DynamicForm from '../components/form';

const Home = () => {
  const userFields = [
    { name: 'name', label: 'Full Name', placeholder: 'Enter your full name', required: true },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', required: true },
    { name: 'phone', label: 'Contact Number', placeholder: '+123456789', required: true },
    
  ];

  const handleSubmit = async (data) => {
    console.log("Submitting user data:", data); // Debugging log
  
    try {
      const response = await registerUser(data);
      console.log("Success:", response);
      alert("User registered successfully!");
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">User Management</h2>
        <DynamicForm
          fields={userFields}
          initialValues={{
            name: '',
            email: '',
            phone: '',
          }}
          onSubmit={handleSubmit}
          buttonText="Save and Continue"
        />
      </div>
    </div>
  );
};

export default Home;