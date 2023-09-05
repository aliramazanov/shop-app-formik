import { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import inputValidation from "./InputValidation.js";
import "./InputForm.scss";
import SubmitButton from "./SubmitButton";

const InputForm = ({ handleSubmit }) => {
  const [isPurchaseSuccessful, setIsPurchaseSuccessful] = useState(false);
  const handlePurchaseSuccessful = () => {
    setIsPurchaseSuccessful(true);
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        address: "",
        number: "",
      }}
      validationSchema={inputValidation}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
        handlePurchaseSuccessful();
      }}
    >
      {(formikProps) => (
        <form onSubmit={formikProps.handleSubmit}>
          <div className="each-form-field">
            <label htmlFor="firstName">First Name:</label>
            <ErrorMessage
              className="error-message"
              name="firstName"
              component="div"
            />
            <Field type="text" id="firstName" name="firstName" />
          </div>

          <div className="each-form-field">
            <label htmlFor="lastName">Last Name:</label>
            <ErrorMessage
              className="error-message"
              name="lastName"
              component="div"
            />
            <Field type="text" id="lastName" name="lastName" />
          </div>

          <div className="each-form-field">
            <label htmlFor="age">Age:</label>
            <ErrorMessage
              className="error-message"
              name="age"
              component="div"
            />
            <Field type="text" id="age" name="age" />
          </div>

          <div className="each-form-field">
            <label htmlFor="address">Address:</label>
            <ErrorMessage
              className="error-message"
              name="address"
              component="div"
            />
            <Field type="text" id="address" name="address" />
          </div>

          <div className="each-form-field">
            <label htmlFor="number">Number:</label>
            <ErrorMessage
              className="error-message"
              name="number"
              component="div"
            />
            <Field type="text" id="number" name="number" />
          </div>

          <div className="button-container">
            <SubmitButton label="Submit & Buy!" />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default InputForm;
