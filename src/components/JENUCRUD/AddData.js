import { Button, Modal } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";
const SignupSchema = Yup.object().shape({
  title: Yup.string().required("title Required"),
  author: Yup.string().required("author name Required"),
  Date: Yup.date().required("Date Required"),
  Sell: Yup.number().required("Sell Required"),
  Status: Yup.boolean().required("pls select status"),
});
export default function AddData({update, data,setupdate,setdata}){
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        console.log(update);
      };
      const handleShow = () => {
        setShow(true);
      };
    return(
        <>
        <div className="container">
        <Button className="border-dark mb-3" variant="" onClick={handleShow}>
          <BsFillPersonPlusFill />
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Add data</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              title:  "",
              author:  "",
              Sell: "",
              Date: "",
              Status:  "",
            }}
            enableReinitialize
            validationSchema={SignupSchema}
            onSubmit={(values) => {
                let withid = values;
                withid.id = Math.floor(Math.random() * 100);
                setdata([...data, withid]);
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
              <form onSubmit={handleSubmit} id="form">
                <label htmlFor="title">title</label>
                <input
                  name="title"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.title}
                  className={`form-control ${errors.title ? "is-invalid" : ""}`}
                />
                {errors.title && touched.title && (
                  <p id="error-=message" className="text-danger">
                    {errors.title}
                  </p>
                ) }
                <br />
                <label htmlFor="author">author</label>
                <input
                  name="author"
                  type="text"
                  onBlur={handleBlur}
                  value={values.author}
                  onChange={handleChange}
                  className={`form-control ${errors.author}`}
                />
                {errors.author && touched.author &&(
                  <p id="error-=message" className="text-danger">
                    {errors.author}
                  </p>
                ) }
                <br />
                <label htmlFor="date">Date</label>
                <input
                  name="Date"
                  type="Date"
                  onBlur={handleBlur}
                  value={values.Date}
                  onChange={handleChange}
                  className={`form-control ${errors.Date}`}
                />
                {errors.Date && touched.Date && (
                  <p id="error-=message" className="text-danger">
                    {errors.Date}
                  </p>
                )}
                <br />
                <label htmlFor="sell">Sell</label>
                <input
                  name="Sell"
                  type="number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Sell}
                  className={`form-control ${errors.Sell}`}
                />
                {errors.Sell && touched.Sell &&(
                  <p id="error-=message" className="text-danger">
                    {errors.Sell}
                  </p>
                )}
                <br />
                <div id="my-radio-group">status</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="Status" value="true" />
                    true
                  </label>
                  <label>
                    <Field type="radio" name="Status" value="false" />
                    false
                  </label>
                </div>
                {errors.Status && touched.Status && (
                  <p id="error-=message" className="text-danger">
                    {errors.Status}
                  </p>
                )}
                <br />
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" type="submit" className="bg-danger border-0 p-2">
                    Change Table
                  </Button>
                </Modal.Footer>
              </form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
      </div>
        </>
    )
}