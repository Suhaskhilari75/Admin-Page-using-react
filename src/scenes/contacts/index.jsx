import { Box, Button } from "@mui/material";
import { mockDataContacts } from "../../data/mockData";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DownloadIcon from '@mui/icons-material/Download';

import Header from "../../components/Header";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar Id", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address", flex: 1 },
    { field: "city", headerName: "City", flex: 1 },
    { field: "zipCode", headerName: "Zipcode", flex: 0.5 },
  ];

  const handleExport = () => {
    const csvData = (mockDataContacts ).map((row) => ({
      ID: row.id,
      registerID: row.registrarId,
      Name: row.name,
      Age: row.age,
      Phone: row.phone,
      Email: row.email,
      Address: row.address,
      City: row.city,
      Zipcode: row.zipCode,
    }));
    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvData.map((e) => Object.values(e).join(",")).join("\n");
    const encodeuri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodeuri);
    link.setAttribute("download", "contacts_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />

      <Button
        sx={{
          textTransform:"none",
          m: "2px 0 0 0 ",
          backgroundColor: colors.blueAccent[700],
          color: "white",
          "&:hover": {
            background: colors.blueAccent[500],
          },
          
        }}
        onClick={handleExport}
      >
        Dowload All Data &nbsp; <DownloadIcon/>
      </Button>

      <Box
        m="30px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          //declare above as a cellclassname line:19
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },

          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },

          "& .MuiDataGrid-VirtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: colors.grey[100],
          },
          "& .MuiCheckbox-root":{
            color:`${colors.greenAccent[200]} !important`
          }
        }}
      >
        <DataGrid rows={mockDataContacts} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
};
export default Contacts;
