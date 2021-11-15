import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "./EventCalendar.css";

const EventCalendar = () => {
  const events = [
    {
      title: "MegaWatt",
      start: "2021-11-16",
      end: "2021-11-16",
    },
    {
      title: "Candy Dulfer Konzert",
      start: "2021-11-16",
      end: "2021-11-16",
    },
    {
      title: "Marc Amacher",
      start: "2021-11-26",
      end: "2021-11-26",
    },
  ];
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-gray-100 mb-1 text-xs font-semibold">
                Overview
              </h6>
              <h2 className="text-white text-xl font-semibold">
                Event Calendar
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          <div className="relative h-350-px">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={events}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCalendar;
