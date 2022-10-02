import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import data from "./data.json";

//create list for dynamic standard
const standardsList = [
  { key: 1, value: "1", display: 1 },
  { key: 2, value: "2", display: 2 },
  { key: 3, value: "3", display: 3 },
  { key: 4, value: "4", display: 4 },
];

//represent columns of table
const columns = [
  {
    field: "id",
    headerName: "Sr",
    width: 90,
    flex: 1,
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
  },
  {
    field: "UIDNumber",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "UID Number",
    flex: 1,
    width: 190,
  },
  {
    flex: 1,
    field: "fullName",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    headerName: "Full name",
    cellAlign: "center",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.lastName || ""} ${params.row.firstName || ""} ${
        params.row.FatherName || ""
      } `,
  },
];

//main function start from here...

export default function ManageStudentTable(props) {
  const [row, setRows] = useState([]); //useState for store rows of table
  const [standard, setStandard] = useState(0); //useState for set standard which is selected by user

  //event handler for standard drop down
  function handleStandard() {
    var a = document.getElementById("standard");
    setStandard(a.value);
  }

  //method call when any changes occurred in value of standard
  //Do not change == to === without permission📌📌📌
  useEffect(() => {
    let ob = data.filter((d) => d.standard == standard);
    setRows(ob);
  }, [standard]);

  return (
    <div>
      <div className="drop-down-standard-manageStudent">
        <label>Choose a standard:</label>

        <select onChange={handleStandard} name="standard" id="standard">
          <option value="None">None</option>

          {standardsList.map((v) => (
            <option key={v.key} value={v.value}>
              {v.display}
            </option>
          ))}
        </select>

        <div>
          Total Number of student in standard {standard} : {row.length}
        </div>
      </div>

      <Box
        sx={{
          height: 400,
          width: "80%",
          border: "1px solid black",
          "& .super-app-theme--header": {
            color: "#ffffff",
            backgroundColor: "#346f82",
          },
        }}
      >
        <DataGrid
          cell--textCenter
          rows={row}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]} //table pagination
          components={{ Toolbar: GridToolbar }} //header above the table
          disableColumnFilter //remove filter button
          disableColumnSelector //to remove column selection
          disableDensitySelector //to remove density selection
          disableColumnMenu
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }} //search button
        />
      </Box>
    </div>
  );
}
