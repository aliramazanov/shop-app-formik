import * as Yup from "yup";

const inputValidation = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  age: Yup.number()
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer("Age must be a complete number"),
  address: Yup.string().required("Address is required"),
  number: Yup.number()
    .required("Number is required")
    .positive("Number must be a positive number")
    .integer("Number must be a complete number"),
});

export default inputValidation;
