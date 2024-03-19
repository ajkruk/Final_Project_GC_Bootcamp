import axios from 'axios';
import UserIf from '../models/UserIf';

const apiUrl = "http://localhost:5173/Trade2Save/Users2Trade";

const getAllUsers = async (): Promise<UserIf[]> => {
    const response = await axios.get<UserIf[]>(apiUrl);

    return response.data;
};

const updateUser = (id: string, user: UserIf) => {
    return axios.put(apiUrl + id, user);
};

function addUser(user: UserIf) {
    return axios.post(apiUrl, user);
}

function deleteMember(id: string) {
    return axios.delete(apiUrl +id)
}

export {getAllUsers, updateUser, addUser, deleteMember}