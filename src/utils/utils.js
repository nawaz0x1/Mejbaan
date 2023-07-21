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

export const timeFormaterDBtoDisplay = (timestamp) => {
  // Convert the timestamp to a JavaScript Date object
  const dateObj = new Date(timestamp);

  // Get local time components
  const localHours = dateObj.getHours();
  const localMinutes = dateObj.getMinutes();

  // Format hours and minutes to display in 12-hour format with leading zeros
  const formattedHours = (localHours % 12 || 12).toString().padStart(2, '0');
  const formattedMinutes = localMinutes.toString().padStart(2, '0');

  // Get local date components
  const localDay = dateObj.getDate();
  const localMonth = dateObj.getMonth() + 1; // Months are zero-based in JavaScript, so we add 1

  // Format date components
  const formattedDay = localDay.toString().padStart(2, '0');
  const formattedMonth = localMonth.toString().padStart(2, '0');
  const formattedYear = dateObj.getFullYear();

  // Determine AM or PM
  const meridiem = localHours >= 12 ? 'pm' : 'am';

  // Final formatted string
  const formattedString = `${formattedHours}:${formattedMinutes}${meridiem} ${formattedDay}-${formattedMonth}-${formattedYear}`;

  return formattedString;
};

export const objectCleaner = (obj) => {
  const newObj = {};
  for (const key in obj) {
    if (!key.startsWith('$')) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};
