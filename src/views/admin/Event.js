import { useState, useEffect } from "react";
import axios from "axios";

import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import EventTable from "../../components/Event/EventTable";
import CreateEventForm from "../../components/Event/CreateEventForm";
import AdminFooter from "../../components/Common/AdminFooter";

const Event = () => {
  const [events, setEvents] = useState([]);
  const [showEventForm, setShowEventForm] = useState(false);

  useEffect(() => {
    axios
      .get("https://thawing-reaches-07578.herokuapp.com/events")
      .then((response) => setEvents(response.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
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
          <CreateEventForm />
        </Transition>
      </div>
      <div className="relative px-4 md:px-10 mx-auto w-full pt-6">
        <div className="mb-12 xl:mb-0">
          <EventTable color="light" events={events} />
        </div>

        <AdminFooter />
      </div>
    </>
  );
};

export default Event;
