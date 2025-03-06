import Header from "../../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import TrafficIcon from "@mui/icons-material/Traffic";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeoChart from "../../components/GeoChart";
import ProgressCircle from "../../components/ProgressCircle";
import StatsBox from "../../components/StatBox";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title={"DASHBOARD"} subtitle={"Welcome to your dashboard"} />
      </Box>
      <Box>
        <Button
          sx={{
            backgroundColor: colors.indigoAccent[700],
            color: colors.grey[100],
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </Button>
      </Box>

      {/* GRId & CHARTS */}
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        gridAutoRows={"140px"}
        gap={"20px"}
      >
        {/* Row 1 */}
        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatsBox
            title={"12,361"}
            subtitle={"Emails Sent"}
            progress={"0.75"}
            increase={"+14%"}
            icon={
              <EmailIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatsBox
            title={"431, 225"}
            subtitle={"Sales Obtained"}
            progress={"0.5"}
            increase={"+21%"}
            icon={
              <PointOfSaleIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatsBox
            title={"32, 441"}
            subtitle={"New Clients"}
            progress={"0.30"}
            increase={"+5%"}
            icon={
              <PersonAddIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        <Box
          gridColumn={"span 3"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatsBox
            title={"1,325, 134"}
            subtitle={"Traffic Inbound"}
            progress={"0.80"}
            increase={"+43%"}
            icon={
              <TrafficIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        {/* Row 2 */}
      </Box>
    </Box>
  );
};

export default Dashboard;
