import "./RegistarionPage.css";
import { Footer } from "../footer/Footer";
import { Form, Formik } from "formik";
import { FormField } from "../form_field/FormField";
import { Link } from "react-router-dom";
import { RegistrationButton } from "./RegistrationButton";
import { createUser } from "../../services/api";

export const RegistrationPage = () => {
  return (
    <>
      <main className="registration_main">
        <h1 className="registration_main__label">Registration</h1>
        <Formik
          initialValues={{ first_name: "", last_name: "", email: "", password: "", repeat_password: "" }}
          validateOnChange={false}
          validateOnBlur={false}
          validate={async (values) => {
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
              errors.email = "Email not provided";
            } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
              errors.email = "Ivalid email";
            }
            if (values.password === "") {
              errors.password = "Password not provided";
            }
            if (values.password !== values.repeat_password) {
              errors.repeat_password = "Passwords don't match";
            }
            return errors;
          }}
          onSubmit={async (values) => {
            await createUser(values.first_name, values.last_name, values.email, values.password).then(() => {
              localStorage.isLoggedIn = true;
              window.location.href = "/";
            });
          }}
        >
          <Form className="registration_main__form" id="registration_form">
            <FormField name="first_name" type="text" placeHolder="First name"></FormField>
            <FormField name="last_name" type="text" placeHolder="Last name"></FormField>
            <FormField name="email" type="email" placeHolder="E-mail"></FormField>
            <FormField name="password" type="password" placeHolder="Password"></FormField>
            <FormField name="repeat_password" type="password" placeHolder="Repeat password"></FormField>
          </Form>
        </Formik>
        <div className="registration_main__not_registered">
          <p className="registration_main__not_registered__text">Not registered yet?</p>
          <Link className="registration_main__not_registered__link" to="/login">
            Log in
          </Link>
        </div>
        <RegistrationButton />
      </main>
      <Footer />
    </>
  );
};
