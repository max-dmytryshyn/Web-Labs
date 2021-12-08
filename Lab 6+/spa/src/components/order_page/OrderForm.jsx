import "./OrderForm.css";
import { Formik, Form } from "formik";
import { FormField } from "../form_field/FormField";

export const OrderForm = () => {
  return (
    <Formik
      initialValues={{ first_name: "", last_name: "", email: "", phone_number: "", address: "" }}
      validate={(values) => {
        let errors = {};
        if (values.first_name === "") {
          errors.first_name = "Field required";
        } else if (!/^[A-Z]{1}[a-z]*(-{1}[A-Z]{1}[a-z]*)*$/.test(values.first_name)) {
          errors.first_name = "Ivalid first name";
        }
        if (values.last_name === "") {
          errors.last_name = "Field required";
        } else if (!/^[A-Z]{1}[a-z]*(-{1}[A-Z]{1}[a-z]*)*$/.test(values.last_name)) {
          errors.last_name = "Ivalid last name";
        }
        if (values.email === "") {
          errors.email = "Field required";
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
          errors.email = "Ivalid email";
        }
        if (values.phone_number === "") {
          errors.phone_number = "Field required";
        } else if (!/^\+\d{10,12}$/.test(values.phone_number)) {
          errors.phone_number = "Ivalid phone number";
        }
        if (values.address === "") {
          errors.address = "Field required";
        } else if (
          !/^[A-Z]{1}[a-z]*(-{1}[A-Z]{1}[a-z]*){0,3},\s?[A-Z]{1}[a-z]*(-{1}[A-Z]{1}[a-z]*){0,3},\s?[A-Z]{1}[a-z]*(-{1}[A-Z]{1}[a-z]*){0,3},\s?[0-9a-z]{1,4}$/.test(
            values.address
          )
        ) {
          errors.address = "Ivalid address";
        }
        return errors;
      }}
      onSubmit={() => {
        window.location.href = "/successful_order";
      }}
    >
      <Form className="order_form" id="order_form">
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
