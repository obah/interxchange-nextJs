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
    <div className=" relative mb-8 flex w-44 flex-col lg:mb-14 lg:w-80">
      <div className="flex h-14 w-full items-center justify-between border-2 p-3  lg:h-16">
        <p className="text-lg font-normal lg:text-center lg:text-2xl">
          {label}
        </p>

        <button onClick={handleDropdown} className="rounded-full bg-black p-2">
          <Image
            src={Arrow}
            alt=""
            className={
              (!isOpen ? "rotate-180" : "rotate-0") +
              " z-0 h-3 w-3 lg:h-5 lg:w-5"
            }
          />
        </button>
      </div>

      <div className="absolute top-14 z-10 w-full border-2 border-t-0 bg-black lg:top-16">
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
