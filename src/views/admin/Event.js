import { useState } from "react";
import { Transition } from "@headlessui/react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import DateTimePicker from "../../components/Common/DateTimePicker";
import AdminFooter from "../../components/Common/AdminFooter";

const Event = () => {
  const [showEventForm, setShowEventForm] = useState(false);

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
          <div className="flex flex-wrap mt-5 border-t border-gray-100 pt-6">
            <div className="flex w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
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
                <div className="relative flex flex-col w-full flex-wrap items-stretch mb-3">
                  <label className="uppercase text-gray-700">
                    Event Description *
                  </label>
                  <div>
                    <CKEditor
                      editor={ClassicEditor}
                      config={{}}
                      data="<p>Hello from CKEditor 5!</p>"
                      onReady={(editor) => {
                        editor.editing.view.change((writer) => {
                          writer.setStyle(
                            "height",
                            "200px",
                            editor.editing.view.document.getRoot()
                          );
                        });
                      }}
                      onChange={(event, editor) => {
                        // const data = editor.getData();
                        // console.log({ event, editor, data });
                      }}
                      onBlur={(event, editor) => {
                        // console.log("Blur.", editor);
                      }}
                      onFocus={(event, editor) => {
                        // console.log("Focus.", editor);
                      }}
                    />
                  </div>
                  {/* <textarea
                    rows="8"
                    placeholder="Event Description"
                    className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
                  ></textarea> */}
                </div>
                <div className="flex items-center justify-between">
                  <div className="relative flex w-full flex-wrap items-stretch mb-3 mr-2">
                    <label className="uppercase text-gray-700">
                      Event Start Date *
                    </label>
                    <DateTimePicker />
                  </div>
                  <div className="relative flex w-full flex-wrap items-stretch mb-3 ml-2">
                    <label className="uppercase text-gray-700">
                      Event End Date *
                    </label>
                    <DateTimePicker />
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowEventForm(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-green-500  text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowEventForm(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
            <div className="flex w-full xl:w-4/12 px-4">Preview</div>
          </div>
        </Transition>
      </div>
      <div className="relative px-4 md:px-10 mx-auto w-full pt-6">
        <div className="flex flex-wrap">
          <div className="flex w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            Event List
          </div>
          <div className="flex w-full xl:w-4/12 px-4">Content</div>
        </div>
        <AdminFooter />
      </div>
    </>
  );
};

export default Event;
