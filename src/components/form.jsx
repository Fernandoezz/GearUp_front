import React, { useState } from 'react';

const DynamicForm = ({ fields, initialValues, onSubmit, buttonText }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      {fields.map((field) => (
        <div key={field.name} className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          <input
            type={field.type || 'text'}
            name={field.name}
            value={formData[field.name] || ''}
            onChange={handleChange}
            required={field.required}
            className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            placeholder={field.placeholder || ''}
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
      >
        {buttonText || 'Submit'}
      </button>
    </form>
  );
};

export default DynamicForm;
