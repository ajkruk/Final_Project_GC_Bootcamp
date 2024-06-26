import axios from "axios";
import UserIf from "../models/UserIf";

const apiUrl: string = (import.meta.env.VITE_API_URL || "") + "/users/";

const getAllUsers = async (): Promise<UserIf[]> => {
  const response = await axios.get<UserIf[]>(apiUrl);

  return response.data;
};

const updateUser = async (id: string, user: UserIf) => {
  return await axios.put(apiUrl + id, user);
};

async function addUser(user: UserIf) {
  return await axios.post(apiUrl, user);
}

async function deleteMember(id: string) {
  return await axios.delete(apiUrl + id);
}

export { getAllUsers, updateUser, addUser, deleteMember };
