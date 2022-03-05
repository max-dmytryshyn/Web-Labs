import "./FormField.css";
import { Field } from "formik";
import { ErrorMessage } from "formik";
import { FormFieldErrorMessage } from "./FormFieldErrorMessage";

export const FormField = (props) => {
  return (
    <div className="form_field">
      <label htmlFor={props.name} className="form_field__label">
        {props.label}
      </label>
      <Field type={props.type} name={props.name} placeHolder={props.placeHolder} className="form_field__input" />
      <ErrorMessage name={props.name}>{(msg) => <FormFieldErrorMessage message={msg} />}</ErrorMessage>
    </div>
  );
};
