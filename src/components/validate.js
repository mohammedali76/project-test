const Validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Name is Required.";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "phone Number is Required.";
  } else if (
    !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
      values.phoneNumber
    )
  ) {
    errors.phoneNumber = "phoneNumber is InValid.";
  }
  if (!values.email) {
    errors.email = "email is Required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is InValid.";
  }
  if (!values.password) {
    errors.password = "password is Required.";
  } else if (values.password.length < 5) {
    errors.passWord = "password should be more than 5 characters ";
  }
  return errors;
};

export default Validate;
