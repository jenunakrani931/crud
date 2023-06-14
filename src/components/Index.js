import { useState } from "react";
import alldata from "./JENUCRUD/AllData";
import TableData from "./JENUCRUD/TableData";
import AddData from "./JENUCRUD/AddData";
export const Index = () => {
  const [data, setdata] = useState(alldata);
  const [search, setsearch] = useState("");
  const [update, setupdate] = useState("");
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
      <AddData
        update={update}
        data={data}
        setupdate={setupdate}
        setdata={setdata}
      />
      <TableData
        data={data}
        update={update}
        setdata={setdata}
        search={search}
      />
    </>
  );
};
