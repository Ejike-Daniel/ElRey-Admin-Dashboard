import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useMemo } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkMode";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const TopBar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const colors = useMemo(
    () => tokens(theme.palette.mode),
    [theme.palette.mode]
  );

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      alignItems="center"
    >
      {/* Search Bar */}
      <Box
        display="flex"
        alignItems="center"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
        padding="0 8px"
        height="40px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
