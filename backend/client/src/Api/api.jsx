import axios from "axios";

const baseurl = "https://ms-backend.vercel.app/";

export const registerUser = async (formData) => {
  try {
    const response = await axios.post(`${baseurl}/register`, formData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await axios.post(`${baseurl}/login`, formData);
    return response;
  } catch (error) {
    throw error;
  }
};
