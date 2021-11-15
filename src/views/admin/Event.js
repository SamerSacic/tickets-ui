import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCalendarAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import FooterAdmin from "../../components/Common/Footer/FooterAdmin";

const Event = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="relative px-4 md:px-10 mx-auto w-full py-6 bg-white">
        <div className="flex items-center justify-between">
          <div className="px-4">
            <button
              className="bg-blue-500  text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => setShowModal(true)}
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Create Event
            </button>
            {showModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none"
                  // onClick={() => setShowModal(false)}
                >
                  <div className="relative w-full my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                        <h3 className="text-3xl font-semibold text-gray-700">
                          <FontAwesomeIcon
                            icon={faCalendarAlt}
                            className="mr-3"
                          />
                          Create Event
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black h-8 w-8 text-2xl block outline-none focus:outline-none">
                            <FontAwesomeIcon icon={faTimes} />
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <form>
                          <div className="relative flex w-full flex-wrap items-stretch mb-3">
                            <label className="uppercase text-gray-700">
                              Event Title *
                            </label>
                            <input
                              type="text"
                              placeholder="Event Title"
                              className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                            />
                          </div>
                          <div className="relative flex w-full flex-wrap items-stretch mb-3">
                            <label className="uppercase text-gray-700">
                              Event Description *
                            </label>
                            <textarea
                              rows="8"
                              placeholder="Event Description"
                              className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                            ></textarea>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="relative flex w-full flex-wrap items-stretch mb-3 mx-2">
                              <label className="uppercase text-gray-700">
                                Event Start Date *
                              </label>
                              <input
                                type="text"
                                placeholder="Event Start Date"
                                className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                              />
                            </div>
                            <div className="relative flex w-full flex-wrap items-stretch mb-3 mx-2">
                              <label className="uppercase text-gray-700">
                                Event End Date *
                              </label>
                              <input
                                type="text"
                                placeholder="Event End Date"
                                className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Create Event
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="opacity-25 fixed inset-0 z-30 bg-black"
                  onClick={() => setShowModal(false)}
                ></div>
              </>
            ) : null}
          </div>
          <div className="px-4">Search Form</div>
        </div>
      </div>
      <div className="relative px-4 md:px-10 mx-auto w-full pt-6">
        <div className="flex flex-wrap">
          <div className="flex w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            Event List
          </div>
          <div className="flex w-full xl:w-4/12 px-4">Content</div>
        </div>
        <FooterAdmin />
      </div>
    </>
  );
};

export default Event;
