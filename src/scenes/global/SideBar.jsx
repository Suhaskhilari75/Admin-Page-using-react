import React from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlines from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

// separate component for Items

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
        listStyle: "none",
        display: "flex", // Ensure flexbox layout
        alignItems: "center", // Align items vertically
      }}
      onClick={() => {
        setSelected(title);
      }}
      
    >
      <Link
        to={to} // Use `to` prop for navigation
        style={{
          textDecoration: "none", // Ensure link styling doesn't interfere
          color: "inherit", // Inherit color from parent
          width: "100%", // Ensure full width for click area
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: "2.3%",
          }}
        >
          {icon}
          <Typography
            sx={{
              ml: "10px",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Link>
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },

        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <div style={{ display: "flex", height: "100%" }}>
        <ProSidebar style={{ margin: "0" }} collapsed={isCollapsed}>
          <Menu iconShape="square">
            {/* logo And menu Icon */}

            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                color: colors.grey[100],
                listStyle: "none",
                
              }}
              
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINIS
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)} selected={setSelected}
                  setSelected={setSelected}>
                    <MenuOutlinedIcon/>
                    
                  </IconButton>
                </Box>
              )}
            </MenuItem>
            {/* USER */}
            {!isCollapsed && (
              <Box mb="20x">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`../../assets/user.png`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h4"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Suhas Khilari
                  </Typography>
                  <Typography variant="h5" color={colors.greenaccent[500]}>
                    {" "}
                    VP Fancy Admin
                  </Typography>
                </Box>
              </Box>
            )}
            {/* Menu */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              <Router>
                <Item
                  title="DashBoard"
                  to="/"
                  icon={<HomeOutlinedIcon />}
                  selected={setSelected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{
                    m: "10px 0 5px 20px",
                  }}
                >
                  Data
                </Typography>
                <Item
                
                  title="Manage Team"
                  to="/team"
                  icon={<PeopleOutlinedIcon />}
                  selected={setSelected}
                  setSelected={setSelected}
            
                />
                <Item
                  title="Contact Information"
                  to="/contacts"
                  icon={<ContactsOutlinedIcon />}
                  selected={setSelected}
                  setSelected={setSelected}
                />
                <Item
                  title="Invoices Balances"
                  to="/invoices"
                  icon={<ReceiptOutlinedIcon />}
                  selected={setSelected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{
                    m: "10px 0 5px 20px",
                  }}
                >
                  Pages
                </Typography>
                <Item
                  title="Profile Form"
                  to="/form"
                  icon={<PersonOutlinedIcon />}
                  selected={setSelected}
                  setSelected={setSelected}
                />
                <Item
                  title="Calendar"
                  to="/calender"
                  icon={<CalendarTodayOutlinedIcon />}
                  selected={setSelected}
                  setSelected={setSelected}
                />
                <Item
                  title="FAQ Page"
                  to="/faq"
                  icon={<HelpOutlinedIcon />}
                  selected={setSelected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{
                    m: "10px 0 5px 20px",
                  }}
                >
                  Charts
                </Typography>
                <Item
                  title="Bar Chart"
                  to="/bar"
                  icon={<BarChartOutlinedIcon />}
                  selected={setSelected}
                  setSelected={setSelected}
                />
                <Item
                  title="Pie Chart"
                  to="/pie"
                  icon={<PieChartOutlineOutlinedIcon />}
                  selected={setSelected}
                  setSelected={setSelected}
                />
                <Item
                  title="Line Chart"
                  to="/line"
                  icon={<TimelineOutlines />}
                  selected={setSelected}
                  setSelected={setSelected}
                />
                <Item
                  title="Geography Chart"
                  to="/geography"
                  icon={<MapOutlinedIcon />}
                  selected={setSelected}
                  setSelected={setSelected}
                />
              </Router>
            </Box>
          </Menu>
        </ProSidebar>
      </div>
    </Box>
  );
};

export default SideBar;
