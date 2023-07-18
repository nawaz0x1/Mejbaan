import { Databases, Query } from 'appwrite';
import { client } from './utils';

const databases = new Databases(client);

export const getFoodData = async () => {
  const response = await databases.listDocuments(
    '64b23ab6219288dd6e2b',
    '64b23ae8e6e6cf713222'
  );
  return response;
};
