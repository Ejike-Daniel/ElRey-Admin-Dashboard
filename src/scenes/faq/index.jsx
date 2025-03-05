import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ExpandMore } from "@mui/icons-material";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"}>
      <Header title={"FAQ"} subtitle={"Frequently Asked Questions"} />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I add a new user to the dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To add a new user, navigate to the "Users" section, click on "Add
            User," fill in the required details, and submit. The user will then
            be granted access based on their assigned role.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I customize the dashboard layout?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can customize the dashboard by adjusting widget positions,
            themes, and color schemes in the "Settings" section.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I generate reports?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Go to the "Reports" section, select the type of report you need
            (e.g., sales, user activity, or financial summary), choose the date
            range, and export the report in PDF or CSV format.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What happens if I forget my password?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Click on "Forgot Password" on the login page, enter your registered
            email, and follow the instructions sent to your inbox to reset your
            password.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How do I integrate third-party applications?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can integrate third-party applications via the "Integrations"
            tab in the settings. Choose the app you want to connect, provide API
            credentials if required, and save your settings.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
