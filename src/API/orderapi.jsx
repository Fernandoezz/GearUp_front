import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/orders"; // Adjust if needed

// Save Order
export const saveOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/saveorders`, orderData);
    return response.data;
  } catch (error) {
    console.error("Error saving order:", error.response?.data || error.message);
    throw error;
  }
};
