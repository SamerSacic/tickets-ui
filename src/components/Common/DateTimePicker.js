import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const Element = forwardRef(({ value, onClick }, ref) => (
    <input
      type="text"
      placeholder="Event Start Date"
      className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
      onClick={onClick}
      ref={ref}
      defaultValue={console.log(value)}
    />
  ));
  return (
    <DatePicker
      selected={startDate}
      showTimeSelect
      onChange={(date) => setStartDate(date)}
      customInput={<Element />}
    />
  );
};

export default DateTimePicker;
