import Tabs from "./Tab/Tabs";

const EditEvent = ({ event }) => {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-lg text-gray-700">Events</h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <div className="px-4">
            <Tabs event={event} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditEvent;
