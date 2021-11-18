import { useState, createRef } from "react";
import { createPopper } from "@popperjs/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const TableDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-gray-500 py-1 px-3"
        href="#link"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <FontAwesomeIcon icon={faEllipsisV} />
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#link"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Edit
        </a>
        <a
          href="#link"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          Manage
        </a>
      </div>
    </>
  );
};

export default TableDropdown;
