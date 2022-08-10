export const Validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "Email is required";
    // rejex
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email addres is invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password need to be 6 character or more";
  } else {
    delete errors.password;
  }

  if (type === "signUp") {
    // string.trim() :
    // Removes the leading and trailing white space and line terminator characters from a string.
    if (!data.name.trim()) {
      errors.name = "Username is required";
    } else {
      delete errors.name;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "ConfrimPassword is required";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password do not match";
    } else {
      delete errors.confirmPassword;
    }
    if (!data.isAccepted) {
      errors.isAccepted = "Accept our regulations";
    } else {
      delete errors.isAccepted;
    }
  }

  return errors;
};
