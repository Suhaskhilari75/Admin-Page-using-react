import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
const DashBoard = () => {
  return (
    <Box m="20px">
      <Box display="flex"
      justifyContent="space-between"
      alignItems="center"
      >
        <Header title="DashBoard" subTitle="Welcome to your DashBoard" />
      </Box>
    </Box>
  );
};

export default DashBoard;
