import axios from 'axios';

const API_BASE_URL = "http://localhost:5000/api/user"; // Use "/user" instead of "/api"

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/addusers`, userData); // Matches backend
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error.response?.data || error.message);
    throw error;
  }
};
