import "./FormField.css";
import { Field } from "formik";

export const FormField = (props) => {
  return (
    <div className="form_field">
      <label htmlFor={props.name} className="form_field__label">
        {props.label}
      </label>
      <Field type={props.type} name={props.name} className="form_field__input" />
    </div>
  );
};
