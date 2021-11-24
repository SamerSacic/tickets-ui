import { useState, useEffect } from "react";
import axios from "axios";

import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import Alert from "../../components/Common/Alert";
import EventTable from "../../components/Event/EventTable";
import EventEdit from "../../components/Event/EditEvent";
import CreateEventForm from "../../components/Event/CreateEventForm";
import AdminFooter from "../../components/Common/AdminFooter";

const Event = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showEventForm, setShowEventForm] = useState(false);
  const [showEditEvent, setShowEditEvent] = useState(false);
  // All Events
  const [events, setEvents] = useState([]);
  // Single Event
  const [event, setEvent] = useState({});

  useEffect(() => {
    axios
      .get("https://thawing-reaches-07578.herokuapp.com/events")
      .then((response) => setEvents(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addEvent = (event, setIsSubmitted) => {
    axios
      .post("https://thawing-reaches-07578.herokuapp.com/events", event, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        if (response.status === 201) {
          setEvents([
            ...events,
            {
              title: event.title,
              description: event.description,
              period: {
                start: event.period.start,
                end: event.period.end,
              },
            },
          ]);
          setIsSubmitted(false);
          setShowAlert(true);
          setShowEventForm(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEvent = (event) => {
    axios
      .delete(
        `https://thawing-reaches-07578.herokuapp.com/events/${event.id}/delete`
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const updatedEvents = events.filter((item) => item.id !== event.id);
          setEvents(updatedEvents);
          setShowAlert(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editEvent = (event) => {
    setShowEditEvent(true);
    setEvent(event);
  };

  return (
    <>
      {showAlert && (
        <Alert
          message="Event is created successfully!"
          setShowAlert={setShowAlert}
        />
      )}
      <div className="relative px-4 md:px-10 mx-auto w-full py-6 bg-white">
        <div className="flex items-center justify-between">
          <div className="px-4">
            <button
              className="bg-blue-500  text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowEventForm(true)}
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Create Event
            </button>
          </div>
          <div className="px-4">Search Form</div>
        </div>
        <Transition
          show={showEventForm}
          enter="transition duration-500 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-300 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <CreateEventForm
            onAddEvent={addEvent}
            setShowEventForm={setShowEventForm}
          />
        </Transition>
      </div>
      <div className="relative px-4 md:px-10 mx-auto w-full pt-6">
        <div className="mb-12 xl:mb-0">
          {!showEditEvent ? (
            <EventTable
              color="light"
              events={events}
              onDelete={deleteEvent}
              onEdit={editEvent}
            />
          ) : (
            <EventEdit event={event} />
          )}
        </div>

        <AdminFooter />
      </div>
    </>
  );
};

export default Event;
