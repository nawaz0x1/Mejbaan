// Calculates distance between two GPS coordinates
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  let dLat = deg2rad(lat2 - lat1); // deg2rad
  let dLon = deg2rad(lon2 - lon1);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c; // Distance in km
  return d.toFixed(1);
};

const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
};

// cleans attribute from object that starts with the $ sign (eg. $createdAt)
export const objectCleaner = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (!key.startsWith('$')) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
