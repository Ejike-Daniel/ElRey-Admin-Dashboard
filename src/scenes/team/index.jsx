import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
Header;

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const colums =[{
field
  }]
  return (
    <Box>
      <Header />
      <Box>

      </Box>
    </Box>
  );
};

export default Team;
