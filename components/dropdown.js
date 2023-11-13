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

  const openedDrop = "block ";
  const closedDrop = " hidden";

  const closed = " -translate-y-10 opacity-0";
  const opened = " translate-y-0 opacity-100";

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
              (!isOpen ? "rotate-0" : "rotate-180") +
              " transition-tranform z-0 h-3 w-3 opacity-100 duration-300 ease-in-out md:opacity-70 md:hover:opacity-100 lg:h-5 lg:w-5"
            }
          />
        </button>
      </div>

      <div
        className={
          "transition-tranform absolute top-14 z-10 w-full border-2 border-t-0 bg-black duration-300 ease-out lg:top-16" +
          (isOpen ? opened : closed)
        }
      >
        {options.map((option) => (
          <button
            value={option}
            onClick={onClick}
            key={option}
            className={
              " w-full p-3 text-2xl font-normal hover:bg-yellow-300 hover:text-black " +
              (isOpen ? openedDrop : closedDrop)
            }
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
