import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./scenes/global/TopBar";
import Invocies from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar";
import Team from "./scenes/team";
import { Route, Routes } from "react-router-dom";
import SideBar from "./scenes/global/SideBar";
import Dashboard from "./scenes/dashboard";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";
import GeoChart from "./components/GeoChart";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/line" element={<LineChart />} />
              <Route path="/team" element={<Team />} />
              <Route path="/pie" element={<PieChart />} />
              <Route path="/bar" element={<BarChart />} />
              <Route path="/invoices" element={<Invocies />} />
              <Route path="/geography" element={<GeoChart />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
