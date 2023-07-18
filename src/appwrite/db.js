import { Databases, Query } from 'appwrite';
import { client } from './utils';

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
