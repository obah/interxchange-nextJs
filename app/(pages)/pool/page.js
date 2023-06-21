"use client";

import Dropdown from "@/components/dropdown";
import { useState } from "react";

export default function page() {
  const [network, setNetwork] = useState("Ethereum");
  const networkOptions = ["Ethereum", "Polygon", "Solana"];
  const handleNetworkChange = (e) => {
    setNetwork(e.target.value);
  };

  return (
    <div className="mini-page sm:mt-20 sm:m-32 m-5">
      <div className="flex justify-between items-center sm:mb-10 mb-24">
        <h1 className="font-black text-4xl text-yellow-200 sm:ml-24 ml-9">
          Pools
        </h1>
        <Dropdown
          label={network}
          options={networkOptions}
          onClick={handleNetworkChange}
        />
      </div>
      <div className="flex flex-col gap-14 items-center border-2 sm:w-3/4 w-full mx-auto rounded-3xl sm:py-24 py-14">
        <button className="primary-btn w-1/3">Add position +</button>
        <p className="font-normal text-2xl">
          Your active liquidity positions will appear here
        </p>
      </div>
    </div>
  );
}
