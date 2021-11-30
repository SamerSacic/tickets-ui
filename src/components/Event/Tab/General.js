import { useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";

import Label from "../../Common/FormElement/Label";
import Input from "../../Common/FormElement/Input";
import Editor from "../../Common/FormElement/Editor";
import DateTimePicker from "../../Common/FormElement/DateTimePicker";

const General = ({ event, onEditEvent }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      eventTitle: event.title,
      eventDesc: event.description,
      eventStartDate: new Date(
        event.period.startDate + " " + event.period.startTime
      ),
      eventEndDate: new Date(event.period.endDate + " " + event.period.endTime),
    },
  });

  const onSubmit = (data) => {
    setIsSubmitted(true);

    const eventData = {
      id: event.id,
      title: data.eventTitle,
      description: data.eventDesc,
      period: {
        start: moment(data.eventStartDate).toISOString(),
        end: moment(data.eventEndDate).toISOString(),
      },
    };

    onEditEvent(eventData, setIsSubmitted);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={isSubmitted ? "opacity-30" : ""}
      >
        <div className="flex flex-wrap mt-2">
          <div className="flex flex-col w-full mb-12 xl:mb-0 px-4">
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <Label text="Event Title" />
              <Input
                name="eventTitle"
                register={register}
                placeholder="eg. Open Air 2022"
                className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
              />
            </div>
            <div className="relative flex flex-col w-full flex-wrap items-stretch mb-3">
              <Label text="Event Description" />
              <div>
                <Editor control={control} inputName="eventDesc" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="relative flex w-full flex-wrap items-stretch mb-3 mr-2">
                <Label text="Event Start Date" />
                <DateTimePicker control={control} inputName="eventStartDate" />
              </div>
              <div className="relative flex w-full flex-wrap items-stretch mb-3 ml-2">
                <Label text="Event End Date" />
                <DateTimePicker control={control} inputName="eventEndDate" />
              </div>
            </div>
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <Label text="Venue Name" />
              <input
                type="text"
                placeholder="Venue Name"
                className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
              />
            </div>
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <Label text="Address Line 1" />
              <input
                type="text"
                placeholder="Address Line 1"
                className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
              />
            </div>
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <Label text="Address Line 2" />
              <input
                type="text"
                placeholder="Address Line 2"
                className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
              />
            </div>
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <Label text="City" />
              <input
                type="text"
                placeholder="City"
                className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
              />
            </div>
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <Label text="Post Code" />
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
            {isSubmitted ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              ""
            )}
            <span>Save Changes</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default General;
