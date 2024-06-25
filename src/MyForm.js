import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

class MyForm extends React.Component {
  handleSubmit = (values, { props = this.props, setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
    return;
  };

  render() {
    const yupValidationSchema = yup.object({
      email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),
      first_name: yup.string().required("First Name is required"),
    });

    return (
      <Formik
        initialValues={{
          first_name: "",
          email: "",
          gender: "male",
        }}
        validationSchema={yupValidationSchema}
        onSubmit={this.handleSubmit}
        component={(formProps) => {
          return (
            <Form>
              <Field type="text" name="first_name" placeholder="First Name" />
              <ErrorMessage name="first_name" />
              <Field type="email" name="email" placeholder="Email address" />
              <ErrorMessage name="email" />
              <Field name="gender" component="select" placeholder="Your Gender">
                <option value="male" selected>
                  Male
                </option>
                <option value="female">Female</option>
              </Field>
              <button type="submit" disabled={formProps.isSubmitting}>
                Submit Form
              </button>
            </Form>
          );
        }}
      />
    );
  }
}

export default MyForm;
