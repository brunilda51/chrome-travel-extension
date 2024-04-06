import { User } from '../types';

const baseUrl = '/api/users/';

const getAllUsers = async (): Promise<User[]> => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

const getUserById = async (id: number): Promise<User> => {
  const response = await fetch(`${baseUrl}${id}/`);
  const data = await response.json();
  return data;
};

const createUser = async (newUser: User): Promise<User> => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
  const data = await response.json();
  return data;
};

const updateUser = async (id: number, updatedUser: User): Promise<User> => {
  const response = await fetch(`${baseUrl}${id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedUser),
  });
  const data = await response.json();
  return data;
};

const deleteUser = async (id: number): Promise<void> => {
  await fetch(`${baseUrl}${id}/`, {
    method: 'DELETE',
  });
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
