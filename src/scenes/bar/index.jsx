import { Box } from "@mui/material";
import Headers from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m={"20px"}>
      <Headers title={"Bar Chart"} subtitle={"Simple bar chart"}></Headers>
      <Box height={"75vh"}>
        <BarChart/>
      </Box>
    </Box>
  );
};

export default Bar;
