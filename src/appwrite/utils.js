import { Client, Account, ID, Storage } from 'appwrite';
import { v4 as uuidv4 } from 'uuid';

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

export const client = new Client().setEndpoint(endpoint).setProject(projectId);

const account = new Account(client);

// Creates new account
export const createUserAccount = async ({ name, email, password }) => {
  try {
    const response = await account.create(ID.unique(), email, password, name);
    await loginUser({ email, password });
    return response;
  } catch (error) {
    throw error;
  }
};

// Login existing user
export const loginUser = async ({ email, password }) => {
  try {
    const response = await account.createEmailSession(email, password);
    return response;
  } catch (error) {
    throw error;
  }
};

// Get user data including name and id
export const getUser = async () => {
  try {
    const response = await account.get();
    return response;
  } catch (error) {
    throw error;
  }
};

// Logout current user
export const logoutUser = async (sessionID = 'current') => {
  try {
    const response = await account.deleteSession(sessionID);
    return response;
  } catch (error) {
    throw error;
  }
};

// Checks if any user in currently loggedin
export const isUserLoggedIn = async () => {
  const user = await getUser();
  return Boolean(user);
};

// Uploads image in bucket storage
export const imageUpload = async (file) => {
  const storage = new Storage(client);
  try {
    const response = await storage.createFile(
      '64ba52bacf4ecb0a05bf',
      uuidv4(),
      file
    );
    const { $id, bucketId } = response;
    const result = storage.getFilePreview(bucketId, $id);
    return result.href;
  } catch (error) {
    throw new Error(error);
  }
};
