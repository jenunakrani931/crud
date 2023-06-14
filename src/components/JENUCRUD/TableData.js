import { Edit } from "./Edit";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";
import { BsFillTrashFill } from "react-icons/bs";
export default function TableData({ data, update, setdata, search }) {
  const justTest = (index, valdata) => {
    console.log("index, data", index, valdata);
    const upd_obj = data.map((obj) => {
      if (obj.id === index) {
        return {
          ...obj,
          title: valdata.title,
          author: valdata.author,
          Date: valdata.Date,
          Sell: valdata.Sell,
          Status: valdata.Status,
        };
      }
      return obj;
    });
    setdata(upd_obj);
  };
  function singleDelete(index) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let total = [...data];
        total.splice(index, 1);
        setdata(total);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }
  return (
    <>
      <Table striped bordered hover className="container">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>date</th>
            <th>Sell</th>
            <th>Status</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((res) => {
              if (search === "") {
                return res;
              } else if (res.title.toLowerCase().includes(search)) {
                return res;
              }
              return false;
            })  
            .map((i, index) => {
              return (
                <tr key={index}>
                  <td>{i.id}</td>
                  <td>{i.title}</td>
                  <td>{i.author}</td>
                  <td>{i.Date}</td>
                  <td>{i.Sell}</td>
                  <td>{i.Status}</td>
                  <td>
                    <Edit
                      data={i}
                      index={index}
                      update={update}
                      setdata={justTest}
                    />
                  </td>
                  <td>
                    <button onClick={() => singleDelete(index)}>
                      <BsFillTrashFill />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}
