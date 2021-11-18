import { useState } from "react";
import moment from "moment";

import Editor from "../../components/Common/Form/Editor";
import DateTimePicker from "../../components/Common/Form/DateTimePicker";

const CreateEventForm = ({ onAddEvent }) => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDesc, setEventDec] = useState("");
  const [eventStartDate, setEventStartDate] = useState(new Date());
  const [eventEndDate, setEventEndDate] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredTitle = eventTitle;
    const enteredDesc = eventDesc;
    const enteredStartDate = moment(eventStartDate).toISOString();
    const enteredEndDate = moment(eventEndDate).toISOString();

    const eventData = {
      title: enteredTitle,
      description: enteredDesc,
      period: {
        start: enteredStartDate,
        end: enteredEndDate,
      },
    };

    // console.log(eventData);

    onAddEvent(eventData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap mt-5 border-t border-gray-100 pt-6">
        <div className="flex flex-col w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <label className="uppercase text-gray-700">Event Title *</label>
            <input
              onChange={(event) => {
                setEventTitle(event.target.value);
              }}
              type="text"
              placeholder="Event Title"
              className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
            />
          </div>
          <div className="relative flex flex-col w-full flex-wrap items-stretch mb-3">
            <label className="uppercase text-gray-700">
              Event Description *
            </label>
            <div>
              <Editor onAction={setEventDec} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="relative flex w-full flex-wrap items-stretch mb-3 mr-2">
              <label className="uppercase text-gray-700">
                Event Start Date *
              </label>
              <DateTimePicker onAction={setEventStartDate} />
            </div>
            <div className="relative flex w-full flex-wrap items-stretch mb-3 ml-2">
              <label className="uppercase text-gray-700">
                Event End Date *
              </label>
              <DateTimePicker onAction={setEventEndDate} />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gray-700 w-full xl:w-4/12 px-4 py-4 rounded-md shadow">
          <h3 className="text-xl font-normal leading-normal mt-0 mb-2 text-white">
            Address Details
          </h3>
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <label className="uppercase text-white">Venue Name *</label>
            <input
              type="text"
              placeholder="Venue Name"
              className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
            />
          </div>
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <label className="uppercase text-white">Address Line 1</label>
            <input
              type="text"
              placeholder="Address Line 1"
              className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
            />
          </div>
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <label className="uppercase text-white">Address Line 2</label>
            <input
              type="text"
              placeholder="Address Line 2"
              className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
            />
          </div>
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <label className="uppercase text-white">City</label>
            <input
              type="text"
              placeholder="City"
              className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
            />
          </div>
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <label className="uppercase text-white">Post Code</label>
            <input
              type="text"
              placeholder="Post Code"
              className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full px-4 items-center justify-end mt-5">
        <button
          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Cancel
        </button>
        <button className="bg-green-500  text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default CreateEventForm;
