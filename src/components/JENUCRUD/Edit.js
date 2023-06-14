import { useState } from "react";
import { BsFillPenFill } from "react-icons/bs";
import { Button, Modal } from "react-bootstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";
export const Edit = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow1 = () => {
    setShow(true);
  };
  return (
    <>
      <div>
        <Button variant="" onClick={handleShow1}>
          <BsFillPenFill />
        </Button>
        <Formik
          initialValues={{
            id: props?.data?.id,
            title: props?.data?.title,
            author: props?.data?.author,
            Date: props?.data?.Date,
            Sell: props?.data?.Sell,
            Status: props?.data?.Status,
          }}
          validationSchema={Yup.object({
            title: Yup.string().required("Required"),
            author: Yup.string().required("Required"),
            Date: Yup.date().required("Required"),
            Sell: Yup.number().required("Required"),
          })}
          onSubmit={(values) => {
            // alert(JSON.stringify(values, null, 5));
            console.log(values)
            props.setdata(props.index, values);
          }}
        >
          {(formik, handleChange) => (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <h1>you click {props.index}</h1>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={formik.handleSubmit} id="form">
                  <label htmlFor="title">title</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    {...formik.getFieldProps("title")}
                  />
                  {formik.touched.title && formik.errors.title ? (
                    <div>{formik.errors.title}</div>
                  ) : null}
                  <br />
                  <label htmlFor="Author">author</label>
                  <input
                    id="author"
                    name="author"
                    type="text"
                    onChange={handleChange}
                    {...formik.getFieldProps("author")}
                  />
                  {formik.touched.author && formik.errors.author ? (
                    <div>{formik.errors.author}</div>
                  ) : null}
                  <br />
                  <label htmlFor="date">Date</label>
                  <input
                    id="Date"
                    name="Date"
                    type="Date"
                    onChange={handleChange}
                    {...formik.getFieldProps("Date")}
                  />
                  {formik.touched.Date && formik.errors.Date ? (
                    <div>{formik.errors.Date}</div>
                  ) : null}
                  <br />
                  <label htmlFor="Sell">Sell</label>
                  <input
                    id="Sell"
                    name="Sell"
                    type="number"
                    value={props.update}
                    onChange={handleChange}
                    {...formik.getFieldProps("Sell")}
                  />
                  {formik.touched.Sell && formik.errors.Sell ? (
                    <div>{formik.errors.Sell}</div>
                  ) : null}
                  <br />
                  <div id="my-radio-group">Status :</div>
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
                  <br />
                  <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleClose}>
                      update data
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </form>
              </Modal.Body>
            </Modal>
          )}
        </Formik>
      </div>
    </>
  );
};
