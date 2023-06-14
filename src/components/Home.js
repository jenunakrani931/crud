import { useState } from "react";
import { Button } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";
import TableList from "../components/CRUD/TableList";
import CreateEditModal from "../components/CRUD/CreateEditModal";
import staticData from "../DB/list";

export default function Home() {
  const [data, setdata] = useState(staticData);
  const [show, setShow] = useState(false);
  const [editData, seteditData] = useState({});
  const [search, setsearch] = useState("");
  const handleShow = () => {
    seteditData(null);
    setShow(true);
  };
 function resetBtn() {
  window.location.reload()
 }
  return (
    <>
      <div className="align-center">
        <input
          value={search}
          id="searchdata"
          className="align-center mt-5 p-2"
          placeholder="Search"
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>
      <div className="container">
        <Button className="border-dark mb-3" variant="" onClick={handleShow}>
          <BsFillPersonPlusFill />
        </Button>
        <CreateEditModal
          show={show}
          setShow={setShow}
          data={data}
          setdata={setdata}
          editData={editData}
        />
        <button className="btn  ms-5 mb-3 bg-danger text-light" onClick={()=>resetBtn()}>Reset</button>
      </div>
      <TableList
        data={data}
        setdata={setdata}
        setShow={setShow}
        seteditData={seteditData}
        setsearch={setsearch}
        search={search}
      />
    </>
  );
}
