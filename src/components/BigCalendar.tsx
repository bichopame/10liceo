"use client";

import { Calendar, momentLocalizer, View, Views} from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data';
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react';
import 'moment/locale/es'; // Idioma español

moment.locale('es');
const localizer = momentLocalizer(moment);

const messages = {
  allDay: 'Todo el día',
  previous: 'Anterior',
  next: 'Siguiente',
  today: 'Hoy',
  work_week: 'Semana laboral',
  day: 'Día',
};

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };
  return (
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]}
        view={view}
        style={{ height: "98%" }}
        onView={handleOnChangeView}
        min={new Date(2025,1,0,8,0,0)}
        max={new Date(2025,1,0,19,0,0)}
        messages={messages} // Traducción de textos
      />
  );
};

export default BigCalendar;