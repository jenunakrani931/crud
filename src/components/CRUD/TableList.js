import { Table } from "react-bootstrap";
import { BsSortDownAlt } from "react-icons/bs";
import Swal from "sweetalert2";
import { BsFillPenFill, BsFillTrashFill } from "react-icons/bs";

export default function TableList({
  data,
  setdata,
  setShow,
  seteditData,
  search,
}) {
  function singleDelete(index) {
    Swal.fire({
      title: ` you want to delete ${data[index].author} 's data `,
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
        Swal.fire("Deleted!", "Your data has been deleted.", "success");
      }
    });
  }
  function update(selectedData) {
    seteditData(selectedData);
    setShow(true);
  }
  const short = (type) => {
    var sortdata = data;
    switch (type) {
      case "title":
        sortdata.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          return 0;
        });
        break;
      case "author":
        sortdata.sort((a, b) => {
          if (a.author < b.author) {
            return -1;
          }
          return 0;
        });
        break;
      case "date":
        sortdata.sort((a, b) => {
          if (a.date < b.date) {
            return -1;
          }
          return 0;
        });
        break;
      case "sell":
        sortdata.sort((a, b) => {
          if (a.sell < b.sell) {
            return -1;
          }
          return 0;
        });
        break;
      default:
        setdata(data);
        break;
    }
    setdata([...sortdata]);
    return;
  };
  return (
    <>
      <Table striped bordered hover className="container " bg="success">
        <thead>
          <tr>
            <th>Id</th>
            <th>
              Title
              <button onClick={() => short("title")} className="btn ms-2">
                <BsSortDownAlt />
              </button>
            </th>
            <th>
              Author
              <button onClick={() => short("author")} className="btn ms-2">
                <BsSortDownAlt />
              </button>
            </th>
            <th>
              date
              <button onClick={() => short("date")} className="btn ms-2">
                <BsSortDownAlt />
              </button>
            </th>
            <th>
              Sell
              <button onClick={() => short("sell")} className="btn ms-2">
                <BsSortDownAlt />
              </button>
            </th>
            <th>Status</th>
            <th colSpan="2" className="align-center">
              Action
            </th>
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
            .map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.author}</td>
                  <td>{item.date}</td>
                  <td>{item.sell}</td>
                  <td>{item.status}</td>
                  <td>
                    <button onClick={() => update(item)} className="btn">
                      <BsFillPenFill className="border-dark" />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => singleDelete(index)} className="btn">
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
