import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [openAddEvent, setOpenAddEvent] = useState(false);
  const [openDeleteEvent, setOpenDeleteEvent] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventTitle, setEventTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (selected) => {
    setSelectedDate(selected);
    setEventTitle("");
    setOpenAddEvent(true);
  };

  const handleAddEvent = () => {
    if (eventTitle) {
      const calendarApi = selectedDate.view.calendar;
      calendarApi.unselect();
      calendarApi.addEvent({
        id: `${selectedDate.dateStr} - ${eventTitle}`,
        title: eventTitle,
        start: selectedDate.startStr,
        end: selectedDate.endStr,
        allDay: selectedDate.allDay,
      });
    }
    setOpenAddEvent(false);
  };

  const handleEventClick = (selected) => {
    setSelectedEvent(selected);
    setOpenDeleteEvent(true);
  };

  const handleDeleteEvent = () => {
    selectedEvent.event.remove();
    setOpenDeleteEvent(false);
  };

  return (
    <Box m={"20px"}>
      <Header title={"CALENDAR"} subtitle={"Full Calendar Interactive Page"} />
      <Box display={"flex"} justifyContent={"space-between"}>
        {/* Calendar Sidebar */}
        <Box
          flex={"1 1 20%"}
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius={"4px"}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((e) => (
              <ListItem
                key={e.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={e.title}
                  secondary={
                    <Typography>
                      {formatDate(e.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Calendar */}
        <Box flex={"1 1 100%"} ml={"15px"}>
          <FullCalendar
            height={"75vh"}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(e) => setCurrentEvents(e)}
            initialEvents={[
              { id: "1234", title: "All-day", date: "2025-03-05" },
              { id: "4321", title: "Timed event", date: "2025-03-10" },
            ]}
          />
        </Box>
      </Box>

      {/* Add Event Modal */}
      <Dialog open={openAddEvent} onClose={() => setOpenAddEvent(false)}>
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter a title for your event:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Event Title"
            fullWidth
            variant="outlined"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAddEvent(false)}>Cancel</Button>
          <Button onClick={handleAddEvent} variant="contained" color="primary">
            Add Event
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Event Modal */}
      <Dialog open={openDeleteEvent} onClose={() => setOpenDeleteEvent(false)}>
        <DialogTitle>Delete Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the event '
            {selectedEvent?.event?.title}'?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDeleteEvent(false)}>Cancel</Button>
          <Button
            onClick={handleDeleteEvent}
            variant="contained"
            color="secondary"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Calendar;
