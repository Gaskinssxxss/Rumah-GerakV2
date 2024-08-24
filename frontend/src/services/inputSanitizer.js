const globalWhitelist = {
  text: /^[a-zA-Z\s]+$/, // Allows letters and spaces (for text inputs like nama, kecamatan, kelurahan)
  number: /^[0-9]+$/, // Allows digits only (for numeric inputs like rt, rw)
  phone: /^[0-9+]+$/,
  date: /^\d{4}-\d{2}-\d{2}$/, // Allows date format YYYY-MM-DD
  time: /^\d{2}:\d{2}$/,
  alphanumeric: /^[a-zA-Z0-9\s]+$/, // Allows time format HH:MM// Allows digits and '+' (for phone numbers)
};

export function sanitizeInput(value, type = "text") {
  const whitelistPattern = globalWhitelist[type];

  if (!whitelistPattern.test(value)) {
    // Show alert if input is invalid
    alert(`Input tidak sah. Hanya karakter yang diperbolehkan.`);
    throw new Error("Invalid input");
  }

  return value;
}
