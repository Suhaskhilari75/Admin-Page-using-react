import { Box } from "@mui/material";
import Headers from "../../components/Header";
import PieChart from "../../components/PieChart";
const Pie = () => {
  return (
    <Box m={"20px"}>
      <Headers title={"Pie Chart"} subtitle={"Simple Pie chart"}></Headers>
      <Box height={"75vh"}>
        <PieChart/>
      </Box>
    </Box>
  );
};

export default Pie;
