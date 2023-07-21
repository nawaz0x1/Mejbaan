import { Databases, Query, ID } from 'appwrite';
import { client, getUser } from './utils';

const databases = new Databases(client);

export const getFoodData = async (latitude, longitude) => {
  const desiredDistanceMeters = 20000;
  const oneDegreeInMeters = 111320; // Approximate number of meters in one degree of latitude
  const degreeRange = desiredDistanceMeters / oneDegreeInMeters;

  const filters = [
    Query.greaterThanEqual('gpsLatitude', latitude - degreeRange),
    Query.lessThanEqual('gpsLatitude', latitude + degreeRange),
    Query.greaterThanEqual('gpsLongitude', longitude - degreeRange),
    Query.lessThanEqual('gpsLongitude', longitude + degreeRange),
  ];

  const response = await databases.listDocuments(
    '64b23ab6219288dd6e2b',
    '64b23ae8e6e6cf713222',
    filters
  );

  return response;
};

export const addItemAsProvider = async (data) => {
  try {
    const response = await databases.createDocument(
      '64b23ab6219288dd6e2b',
      '64b23ae8e6e6cf713222',
      ID.unique(),
      data
    );
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getProvidedItems = async () => {
  try {
    const userData = await getUser();
    const filters = [Query.equal('providerID', [userData.$id])];

    const response = await databases.listDocuments(
      '64b23ab6219288dd6e2b',
      '64b23ae8e6e6cf713222',
      filters
    );
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await databases.deleteDocument(
      '64b23ab6219288dd6e2b',
      '64b23ae8e6e6cf713222',
      id
    );
  } catch (error) {
    throw new Error(error);
  }
};

export const getItemInfo = async (id) => {
  try {
    const response = await databases.getDocument(
      '64b23ab6219288dd6e2b',
      '64b23ae8e6e6cf713222',
      id
    );
    console.log('getiing info', response);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateItemInfo = async (id, data) => {
  try {
    const promise = await databases.updateDocument(
      '64b23ab6219288dd6e2b',
      '64b23ae8e6e6cf713222',
      id,
      data
    );
  } catch (error) {
    throw new Error(error);
  }
};
