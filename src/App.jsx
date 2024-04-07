
import { useState, useRef } from "react"; // for search functionality
import "./App.css";
import "react-tabulator/css/tabulator.min.css";
import { ReactTabulator } from "react-tabulator";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const tableRef = useRef();

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchQuery(searchText);
    tableRef.current.table.setFilter([
      { field: 'name', type: 'like', value: searchText }, 
    ]);
  };

  const options = {
    pagination: "remote", 
    paginationSize: 10, 
  };

  const columns = [
    {
      title: "Name",
      field: "name",
      headerFilter: "input",
      headerFilterPlaceholder: "Search Name",
      headerFilterFunc: "like",
      headerFilterLiveFilter: true,
    },
    {
      title: "Age",
      field: "age",
      headerFilter: "input",
      headerFilterPlaceholder: "Search Age",
      headerFilterFunc: "like",
      headerFilterLiveFilter: true,
    },
    {
      title: "Country",
      field: "country",
      headerFilter: "input",
      headerFilterPlaceholder: "Search Country",
      headerFilterFunc: "like",
      headerFilterLiveFilter: true,
    },
  ];

  let data = [
    { id: 1, name: "Adewale Kunle", age: "31", country: "Nigeria" },
    { id: 2, name: "Mary Smith", age: "1", country: "Peru" },
    {
      id: 3,
      name: "Leopold Vicktor",
      age: "24",
      country: "Romania",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "81",
      country: "Sweden",
    },
    {
      id: 5,
      name: "Margret Marmajuke",
      age: "22",
      country: "France",
    },
  ];

  const editableColumns = [
    {
      title: "Status",
      field: "field",
      editor: "input"
    },
    {
      title: "Designed",
      field: "designed",
      align: "center",
      formatter: "tickCross",
      editor: true
    },
    {
      title: "Tested",
      field: "tested",
      align: "center",
      formatter: "tickCross",
      editor: true
    },
    {
      title: "Manufactured",
      field: "manufactured",
      align: "center",
      formatter: "tickCross",
      editor: true
    },
    {
      title: "Shipped",
      field: "shipped",
      align: "center",
      formatter: "tickCross",
      editor: true
    },
    {
      title: "Available",
      field: "available",
      align: "center",
      formatter: "tickCross",
      editor: true
    }
  ];
  
  const initialData = [
    {
      field: "Closed",
      designed: true,
      tested: true,
      manufactured: true,
      shipped: true,
      available: true
    },
    {
      field: "Booked",
      designed: false,
      tested: true,
      manufactured: true,
      shipped: true,
      available: true
    },
    {
      field: "Purchased",
      designed: false,
      tested: false,
      manufactured: true,
      shipped: true,
      available: true
    },
    {
      field: "Pending",
      designed: false,
      tested: false,
      manufactured: true,
      shipped: true,
      available: true
    }
  ];

  const [dataA] = useState(initialData);

  const handleSetData = () => {
    alert("Reg Form Submitted\n" + JSON.stringify(dataA));
  };

  return (
    <>
      <h1 className='Demo_header'>Tabulator Demo</h1>
      <input
        type='text'
        placeholder='Search...'
        name="search"
        value={searchQuery}
        onChange={handleSearch}
      />
      <ReactTabulator
        data={data}
        columns={columns}
        options={options} 
        search={searchQuery}
        ref={tableRef}
      />

      <div style={{ paddingLeft: "16px" }}>
      <h3>Mapping Table</h3>
      <ReactTabulator
        columns={editableColumns}
        data={dataA}
        
      />
      <button
        onClick={handleSetData}
        style={{ marginTop: "16px", backgroundColor: "green" }}
      >
        Submit
      </button>{" "}
    </div>
    </>
  );
}