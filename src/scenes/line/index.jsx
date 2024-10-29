import React from "react";
import LineChart from "../../components/LineChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";
const Line = () => {
  return (
    <Box m={"20px"}>
      <Header title="Line Chart" subtitle={"simple line chart"}></Header>
      <Box height={"75vh"}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
