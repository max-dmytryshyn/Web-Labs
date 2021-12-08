import "./FormFieldErrorMessage.css";

export const FormFieldErrorMessage = (props) => {
  return (
    <>
      <p className="form_error_message">{props.message}</p>
    </>
  );
};
