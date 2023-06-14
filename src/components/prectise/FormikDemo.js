import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, "FIrst name is Too Short!")
    .max(50, " FIrst name is Too Long!")
    .required("Bhai aa to joshe j "),
  last_name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("sarkhu emai aap ne").required("Required"),
  status: Yup.boolean().required("Status Required"),
});
export default function FormikDemo() {
  const [list, setList] = useState([]);
  const [editData, setEditdata] = useState({});
  return (
    <Formik
      initialValues={{
        id: editData.id ? editData.id : null,
        first_name: editData.first_name ? editData.first_name : "",
        last_name: '',
        email: "",
        status: editData.status ? true : false,
        gender: "female",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log("values", values);
        if (values.id) {
          //edit
        } else {
          //add
          let tempadd = values;
          tempadd.id = Math.random();
          setList.push(tempadd);
        }
      }}
    >
      {({
        errors,
        touched,
        handleChange,
        handleBlur,
        values,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            name="first_name"
            type="text"
            id="input_first_name"
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${errors.first_name ? "is-invalid" : ""}`}
          />
          {errors.first_name && (
            <p id="error-=message" className="text-danger">
              {errors.first_name}
            </p>
          )}
          <input
            name="last_name"
            type="text"
            id="input_last_name"
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${errors.last_name ? "is-invalid" : ""}`}
          />
          {errors.last_name && (
            <p id="error-=message" className="text-danger">
              {errors.last_name}
            </p>
          )}
          <input
            name="email"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && (
            <p id="error-=message" className="text-danger">
              {errors.email}
            </p>
          )}
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <input
                type="radio"
                name="gender"
                checked={values.gender === "male"}
                value={"male"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                checked={values.gender === "female"}
                value={"female"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                checked={values.gender === "Transgender"}
                value={"Transgender"}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Transgender
            </label>
          </div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <input
                type="checkbox"
                name="status"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              Is active
            </label>
          </div>
          {JSON.stringify(errors)}
          <button type="button">just click</button>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
}