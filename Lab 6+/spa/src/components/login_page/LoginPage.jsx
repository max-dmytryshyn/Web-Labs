import "./LoginPage.css";
import { Footer } from "../footer/Footer";
import { Form, Formik } from "formik";
import { FormField } from "../form_field/FormField";
import { Link } from "react-router-dom";
import { LoginButton } from "./LoginButton";
import { login } from "../../services/api";

export const LoginPage = () => {
  return (
    <>
      <main className="login_main">
        <h1 className="login_main__label">Log in</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validateOnChange={false}
          validateOnBlur={false}
          validate={async (values) => {
            let errors = {};
            if (values.email === "") {
              errors.email = "Email not provided";
            } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
              errors.email = "Ivalid email";
            }
            if (values.password === "") {
              errors.password = "Password not provided";
            }
            if (values.email !== "" && values.password !== "") {
              await login(values.email, values.password)
                .then()
                .catch((error) => (errors.password = "Wrong email or password"));
            }

            return errors;
          }}
          onSubmit={() => {
            localStorage.isLoggedIn = true;
            window.location.href = "/";
          }}
        >
          <Form className="login_main__form" id="login_form">
            <FormField name="email" type="email" placeHolder="E-mail"></FormField>
            <FormField name="password" type="password" placeHolder="Password"></FormField>
          </Form>
        </Formik>
        <div className="login_main__not_registered">
          <p className="login_main__not_registered__text">Not registered yet?</p>
          <Link className="login_main__not_registered__link" to="/registration">
            Create account
          </Link>
        </div>
        <LoginButton />
      </main>
      <Footer />
    </>
  );
};
