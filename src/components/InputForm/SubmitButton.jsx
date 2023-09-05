import { useState } from "react";
import { useFormikContext } from "formik";
import "./InputForm.scss";

const SubmitButton = ({ label }) => {
  const formik = useFormikContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      formik.handleSubmit();
    }, 3000);
  };

  return (
    <button type="button" onClick={handleSubmit} disabled={!formik.isValid}>
      {isSubmitting ? "On its way!.." : label}
    </button>
  );
};

export default SubmitButton;
