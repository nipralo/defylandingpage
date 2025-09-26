const validateField = (name, value) => {
  switch (name) {
    case "full_Name":
      // Allow either:
      // 1. Only first name (letters only), OR
      // 2. First + Last (letters only, one space in between)
      if (!/^[A-Za-z]+(?: [A-Za-z]+)?$/.test(value.trim())) {
        return "Enter a valid name (letters only, one optional space for last name)";
      }
      break;

    case "phone":
      // Exactly 10 digits, no spaces, no other characters
      if (!/^\d{10}$/.test(value.trim())) {
        return "Enter a valid 10-digit phone number";
      }
      break;

    case "email":
      // Basic but strict email validation
      if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(value.trim())
      ) {
        return "Enter a valid email address";
      }
      break;

    case "city":
      if (!value.trim()) return "City is required";
      break;

    case "month":
      if (!value.trim()) return "Please select a month";
      break;

    default:
      return "";
  }
  return "";
};

export default validateField;
