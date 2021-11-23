import { useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import axios from "axios";

import Alert from "../Common/Alert";
import Label from "../Common/FormElement/Label";
import Input from "../Common/FormElement/Input";
import Editor from "../Common/FormElement/Editor";
import DateTimePicker from "../Common/FormElement/DateTimePicker";

const CreateEventForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { register, control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setIsSubmitted(true);
    const event = {
      title: data.eventTitle,
      description: data.eventDesc,
      period: {
        start: moment(data.eventStartDate).toISOString(),
        end: moment(data.eventEndDate).toISOString(),
      },
    };

    const addEvent = (event) => {
      axios
        .post("https://thawing-reaches-07578.herokuapp.com/events", event, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 201) {
            setShowAlert(true);
            setIsSubmitted(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    addEvent(event);
  };

  return (
    <>
      {showAlert && (
        <Alert
          message="Event is created successfully!"
          setShowAlert={setShowAlert}
        />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={isSubmitted ? "opacity-30" : ""}
      >
        <div className="flex flex-wrap mt-5 border-t border-gray-100 pt-6">
          <div className="flex flex-col w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <Label text="Event Title" />
              <Input
                name="eventTitle"
                register={register}
                placeholder="Event Title"
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
                <DateTimePicker
                  control={control}
                  inputName="eventStartDate"
                  placeholder="Event Start Date"
                />
              </div>
              <div className="relative flex w-full flex-wrap items-stretch mb-3 ml-2">
                <Label text="Event End Date" />
                <DateTimePicker
                  control={control}
                  inputName="eventEndDate"
                  placeholder="Event End Date"
                />
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

export default CreateEventForm;
