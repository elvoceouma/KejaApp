import { endpoints } from "../constants/constants";

export const registerUser = async (
    firstName, 
    lastName, 
    email, 
    password) => {
  try {
    const data = await axios.post(endpoints.register, {
      email,
      password,
      firstName,
      lastName,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
