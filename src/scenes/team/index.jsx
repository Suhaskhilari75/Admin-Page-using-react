import { Box,Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import {mockdataTeam} from "../../data/mockData"
import { AdminPanelSettingsOutlinedIcon } from "@mui/icons-material/AdminPanelSettingsOutlined";
import { LockOpenOutlinedIcon } from "@mui/icons-material/LockOpenOutlined";
import { SecurityOutlinedIcon } from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import React from 'react'
import { useTheme } from "@emotion/react";

const Team = () => {
    const theme=useTheme();
    const colors=tokens(theme.palette.mode);

  return (
    
   <Box>
    <Header title="TEAM" subTitle={"managing the team members"}/>
    <Box>
        <DataGrid/>
    </Box>
   </Box>
   
  )
} 

export default Team