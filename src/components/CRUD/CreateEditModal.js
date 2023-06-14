import { Button, Modal } from "react-bootstrap";
import { Formik, Field } from "formik";
import * as Yup from "yup";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
const SignupSchema = Yup.object().shape({
  title: Yup.string().required("title Required"),
  author: Yup.string().required("author name Required"),
  date: Yup.date().required("Date Required"),
  sell: Yup.number().required("Sell Required"),
  status: Yup.boolean().required("pls select status"),
});
const notify = () => toast.success('Data effected succesfully ', {
  position: "top-left",
  });
export default function CreateEditModal({
  data,
  setdata,
  setShow,
  show,
  editData,
}) {
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Data</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editData?.id}
          <Formik
            initialValues={{
              id: editData?.id ? editData?.id : null,
              title: editData?.title ? editData.title : "",
              author: editData?.author ? editData.author : "",
              sell: editData?.sell ? editData.sell : "",
              date: editData?.date ? editData.date : "",
              status: editData?.status ? editData.status : "",
            }}
            enableReinitialize
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              if (values?.id) {
                const upd_obj = data.map((obj) => {
                  if (obj.id === editData.id) {
                    return {
                      ...obj,
                      title: values.title,
                      author: values.author,
                      date: values.date,
                      sell: values.sell,
                      status: values.status,
                    };
                  }
                  return obj;
                });
                setdata(upd_obj);
              } else {
                let withid = values;
                withid.id = Math.floor(Math.random() * 100);
                setdata([...data, withid]);
              }
              setTimeout(() => {
                handleClose();
              }, 2000);
              
              notify();
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
                )}
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
                {errors.author && touched.author && (
                  <p id="error-=message" className="text-danger">
                    {errors.author}
                  </p>
                )}
                <br />
                <label htmlFor="date">Date</label>
                <input
                  name="date"
                  type="Date"
                  onBlur={handleBlur}
                  value={values.date}
                  onChange={handleChange}
                  className={`form-control ${errors.date}`}
                />
                {errors.date && touched.date && (
                  <p id="error-=message" className="text-danger">
                    {errors.date}
                  </p>
                )}
                <br />
                <label htmlFor="sell">Sell</label>
                <input
                  name="sell"
                  type="number"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.sell}
                  className={`form-control ${errors.sell}`}
                />
                {errors.sell && touched.sell && (
                  <p id="error-=message" className="text-danger">
                    {errors.sell}
                  </p>
                )}
                <br />
                <div id="my-radio-group">status</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>
                    <Field type="radio" name="status" value="true" />
                    true
                  </label>
                  <label>
                    <Field type="radio" name="status" value="false" />
                    false
                  </label>
                </div>
                {errors.status && touched.status && (
                  <p id="error-=message" className="text-danger">
                    {errors.status}
                  </p>
                )}
                <br />
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                  <ToastContainer autoClose={1000}  Transition='zoom'/>
                  <Button
                    variant="primary"
                    type="submit"
                    className="bg-danger border-0 p-2"
                  >
                    Change Table
                  </Button>
                </Modal.Footer>
              </form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
