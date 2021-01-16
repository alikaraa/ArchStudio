import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { H2 } from "../ui/textTypes";
import * as s from "./contactform.styl";
import Arrow from "../../public/icons/icon-arrow-white.jsx";

export default function ContactForm() {
  const initialValues = { name: "", email: "", message: "" };
  return (
    <div
      css={{
        marginTop: "72px",
        "@media (min-width: 768px)": {
          marginTop: "200px",
        },
        "@media (min-width: 1024px)": {
          display: "flex",
          justifyContent: "space-between",
        },
      }}
    >
      <H2
        css={{
          marginBottom: "64px",
          marginTop: "0px",
          "@media (max-width: 426px)": {
            maxWidth: "75%",
            marginBottom: "48px",
          },
        }}
      >
        Connect with us
      </H2>
      <Formik
        enableReinitialize={true}
        validateOnMount={true}
        initialValues={initialValues}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Can't be empty"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Can't be empty"),
          message: Yup.string()
            .max(100, "Must be less than 100 characters")
            .required("Can't be empty"),
        })}
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            alert("Your form has been submitted successfully");
            resetForm({ values: initialValues });
          }, 400);
        }}
      >
        {({ values, handleChange }) => (
          <Form css={s.form}>
            <div css={{ position: "relative" }}>
              <Field
                name="name"
                type="text"
                placeholder="name"
                value={values.name}
                onChange={handleChange}
                css={s.textInput}
              />
              <span css={s.errorMessage}>
                <ErrorMessage name="name" />
              </span>
            </div>
            <div css={{ position: "relative" }}>
              <Field
                name="email"
                type="email"
                placeholder="email"
                value={values.email}
                onChange={handleChange}
                css={s.textInput}
              />
              <span css={s.errorMessage}>
                <ErrorMessage name="email" />
              </span>
            </div>
            <div css={{ position: "relative", lineHeight: 0 }}>
              <Field
                name="message"
                component="textarea"
                rows="3"
                placeholder="message"
                value={values.message}
                onChange={handleChange}
                css={[s.textInput, { height: "134px", marginTop: "15px" }]}
              />
              <span css={s.errorMessage}>
                <ErrorMessage name="message" />
              </span>
            </div>
            <button type="submit" css={s.submitButton}>
              <Arrow />
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
