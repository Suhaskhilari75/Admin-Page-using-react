import { Box } from "@mui/material";
import Headers from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
const Geography = () => {
  return (
    <Box m={"20px"}>
      <Headers title={"Geography Chart"} subtitle={"Simple Geography Chart"}></Headers>
      <Box height={"75vh"}>
        <GeographyChart/>
      </Box>
    </Box>
  );
};

export default Geography;
