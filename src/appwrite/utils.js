import { Client, Account, ID } from 'appwrite';

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

export const client = new Client().setEndpoint(endpoint).setProject(projectId);

const account = new Account(client);

export const createUserAccount = async ({ name, email, password }) => {
  try {
    const response = await account.create(ID.unique(), email, password, name);
    await loginUser({ email, password });
    return response;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const response = await account.createEmailSession(email, password);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await account.get();
    return response;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async (sessionID = 'current') => {
  try {
    const response = await account.deleteSession(sessionID);
    return response;
  } catch (error) {
    throw error;
  }
};

export const isUserLoggedIn = async () => {
  const user = await getUser();
  return Boolean(user);
};
