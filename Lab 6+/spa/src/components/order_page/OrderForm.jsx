import "./OrderForm.css";
import { Formik, Form } from "formik";
import { FormField } from "../form_field/FormField";

export const OrderForm = () => {
  return (
    <Formik initialValues={{ first_name: "", last_name: "", email: "", phone_number: "", address: "" }}>
      <Form className="order_form">
        <div className="order_form__group">
          <FormField name="first_name" type="text" label="First Name"></FormField>
          <FormField name="last_name" type="text" label="Last Name"></FormField>
        </div>
        <div className="order_form__group">
          <FormField name="email" type="email" label="Email"></FormField>
          <FormField name="phone_number" type="tel" label="Phone"></FormField>
        </div>
        <FormField name="address" type="text" label="Address"></FormField>
      </Form>
    </Formik>
  );
};
