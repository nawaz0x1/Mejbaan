import { Databases, Query, ID } from 'appwrite';
import { client, getUser } from './utils';

const databases = new Databases(client);

// Gets food data within 20KM range from database
export const getFoodData = async (latitude, longitude) => {
  const desiredDistanceMeters = 20000; // 20 KM
  const oneDegreeInMeters = 111320; // Approximate number of meters in one degree of latitude
  const degreeRange = desiredDistanceMeters / oneDegreeInMeters;

  // Filters 20KM GPS range and active items
  const filters = [
    Query.greaterThanEqual('gpsLatitude', latitude - degreeRange),
    Query.lessThanEqual('gpsLatitude', latitude + degreeRange),
    Query.greaterThanEqual('gpsLongitude', longitude - degreeRange),
    Query.lessThanEqual('gpsLongitude', longitude + degreeRange),
    Query.equal('active', [true]),
  ];

  const response = await databases.listDocuments(
    '64b23ab6219288dd6e2b',
    '64b23ae8e6e6cf713222',
    filters
  );

  return response;
};

// Add new item in database
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
    throw new Error(error);
  }
};

// Gets item added by the user
export const getProvidedItems = async () => {
  try {
    const userData = await getUser();
    const filters = [Query.equal('providerID', [userData.$id])];

    const response = await databases.listDocuments(
      '64b23ab6219288dd6e2b',
      '64b23ae8e6e6cf713222',
      filters
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

// Delets item by ID
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

// Gets item data by ID
export const getItemInfo = async (id) => {
  try {
    const response = await databases.getDocument(
      '64b23ab6219288dd6e2b',
      '64b23ae8e6e6cf713222',
      id
    );
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

// Updates data of a spacific item
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
