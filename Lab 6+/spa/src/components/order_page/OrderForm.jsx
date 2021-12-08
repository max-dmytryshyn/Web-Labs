import { Formik, Form } from "formik";

export const OrderForm = () => {
  return (
    <Formik initialValues={{ first_name: "", last_name: "", email: "", phone_number: "", address: "" }}>
      <Form></Form>
    </Formik>
  );
};
