"use client";

import Image from "next/image";
import Arrow from "../images/arrow2.png";
import { useEffect, useState } from "react";

export default function Dropdown({ label, options, onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    handleDropdown();
  }, [label]);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closedDrop =
    "block w-full p-3 font-normal text-2xl hover:bg-yellow-300 hover:text-black";
  const openedDrop = closedDrop + " hidden";

  return (
    <div className="mb-8 flex flex-col sm:mb-14">
      <div className="w-30 flex items-center justify-between border-2 p-3 sm:h-16 sm:w-80">
        <p className="text-lg font-normal sm:text-2xl md:text-center">
          {label}
        </p>
        <button
          onClick={handleDropdown}
          className="rounded-full bg-black p-2 sm:p-3"
        >
          <Image
            src={Arrow}
            alt=""
            className={(!isOpen ? "rotate-180" : "rotate-0") + " dropdown-btn"}
          />
        </button>
      </div>
      <div className="w-30 border-2  border-t-0 bg-black sm:w-80">
        {options.map((option) => (
          <button
            value={option}
            onClick={onClick}
            key={option}
            className={isOpen ? openedDrop : closedDrop}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
