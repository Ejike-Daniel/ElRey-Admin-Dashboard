import { Box, colors } from "@mui/material";
import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";

const Line = () => {
  return (
    <Box m={"20px"}>
      <Header title={"GEOGRAPHY CHART"} subtitle={"Simple Geography  Chart "} />
      <Box
        height={"75vh"}
        border={` 1px solid ${colors.grey[100]}`}
        borderRadius={"4px"}
      >
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Line;
