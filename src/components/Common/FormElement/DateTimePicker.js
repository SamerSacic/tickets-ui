import { forwardRef } from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePicker = ({ control, inputName }) => {
  const Element = forwardRef(({ value, onClick }, ref) => (
    <input
      type="text"
      placeholder="November 24, 2021 21:00 PM"
      className="px-3 py-3 placeholder-gray-300 text-gray-600 relative bg-white rounded text-sm border border-gray-300 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
      onClick={onClick}
      ref={ref}
      defaultValue={value}
    />
  ));

  return (
    <Controller
      control={control}
      name={inputName}
      render={({ field: { onChange, onBlur, value } }) => (
        <DatePicker
          selected={value}
          onChange={onChange}
          onBlue={onBlur}
          showTimeSelect
          dateFormat="MMMM d, yyyy HH:mm aa"
          customInput={<Element onChange={onChange} />}
        />
      )}
    />
  );
};

export default DateTimePicker;
