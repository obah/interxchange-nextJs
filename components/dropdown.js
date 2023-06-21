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
    <div className="flex flex-col sm:mb-14 mb-10">
      <div className="flex justify-between items-center border-2 p-3 sm:w-80 w-40 h-16 sm:h-auto">
        <p className="home-p">{label}</p>
        <button
          onClick={handleDropdown}
          className="bg-black rounded-full p-2 sm:p-3"
        >
          <Image
            src={Arrow}
            alt=""
            className={!isOpen ? "rotate-180" : "rotate-0"}
          />
        </button>
      </div>
      <div className="sm:w-80 w-40  border-2 border-t-0 bg-black">
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
