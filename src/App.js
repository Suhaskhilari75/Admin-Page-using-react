import React from "react";
import { Route, Routes ,BrowserRouter} from "react-router-dom";
import { ColorModecontext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar.jsx";
import DashBoard from "./scenes/dashboard";
import Team from "./scenes/team";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModecontext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<DashBoard/>} />
              <Route path="/team" element={<Team/>} />
            </Routes>
            </BrowserRouter>
          </main>
        </div>
      </ThemeProvider>
    </ColorModecontext.Provider>
  );
}


export default App;
