// No Link import needed
import { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./TicketCalendar.css";

const localizer = momentLocalizer(moment);

const TicketCalendar = ({ tickets }) => {
  const [view, setView] = useState(Views.WORK_WEEK);

  // Dynamically check theme at render time
  const isDark =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");

  // Show basic info only
  const EventComponent = ({ event }) => (
    <div className="rbc-event-content" style={{ padding: "0 2px" }}>
      <strong>{event.title}</strong>
      <div style={{ fontSize: "12px" }}>{event.resource.subject}</div>
    </div>
  );

  // Map tickets into calendar events
  const events = tickets.map((ticket) => {
    const start = ticket.createdAt;
    const end = new Date(start.getTime() + 45 * 60 * 1000); 
    return {
      title: `${ticket.id} - ${ticket.status}`,
      start,
      end,
      allDay: false,
      resource: ticket,
    };
  });


  const eventPropGetter = (event) => {
    let backgroundColor = "#e5f4ff";

    if (event.resource.priority === "Urgent") {
      backgroundColor = isDark ? "#471515" : "#ffe0e0";
    } else if (event.resource.priority === "High") {
      backgroundColor = isDark ? "#4a4305" : "#fff7cc";
    } else if (event.resource.priority === "Medium") {
      backgroundColor = isDark ? "#123b20" : "#e8f5e9";
    }

    return {
      style: {
        backgroundColor,
        color: isDark ? "#e0e4ec" : "#000",
        borderRadius: "6px",
        padding: "4px 6px",
        fontWeight: 500,
        border: "grey",
      },
    };
  };

  return (
    <div style={{ height: "80vh" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={[Views.WORK_WEEK, Views.DAY]}
        view={view}
        onView={setView}
        defaultDate={new Date()}
        min={new Date(new Date().setHours(8, 0, 0))}
        max={new Date(new Date().setHours(18, 0, 0))}
        eventPropGetter={eventPropGetter}
        components={{
          event: EventComponent,
        }}
      />
    </div>
  );
};

export default TicketCalendar;
