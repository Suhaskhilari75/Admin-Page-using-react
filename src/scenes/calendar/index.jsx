import Header from "../../components/Header";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate } from "@fullcalendar/core/index.js";
import {
  Box,
  ListItem,
  List,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);
  //
  const handleDateClick = (selected) => {
    const title = prompt("please enter a new title for your event");
    //title store truthy or falsy value ...truthy==> eg. names,nonempty string
    // falsy value ==> NaN ,"",0, THESE ARE FALSY VALUES
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.datestr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  // to delete selected event
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'` //return true=>if click   OK  ....false ==> Click CANCEL
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m={"20px"}>
      <Header
        title=" CALENDAR"
        subtitle={"Full Calendar Interactive Page"}
      ></Header>
      <Box display={"flex"} justifyContent={"space-between"}>

        {/* 1. {calendar sidebar} */}
        <Box
          flex={"1 1 20%"}
          backgroundColor={colors.primary[400]}
          p={"15px"}
          borderRadius={"4px"}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      
                      {
                        (formatDate(event.start,
                        { year: "numeric", month: "long", day: "numeric" })
            )}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* 2.calendar */}
        <Box flex={"1 1 100%"} 
         
         ml={"15px"}>
          <FullCalendar
          height={"75vh"}
          plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin,listPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center:"title",
            right:"dayGridMonth,timeGridWeek,timeGridDay,listMonth"
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events)=>setCurrentEvents(events)}
          initialEvents={[
            
            
          ]}
          

          />
        </Box>
      </Box>
    </Box>
  );
};
export default Calendar;
//
