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
          Staking
        </h1>
        <Dropdown
          label={network}
          options={networkOptions}
          onClick={handleNetworkChange}
        />
      </div>
      <div className="flex flex-col gap-8 items-center border-2 sm:w-3/4 w-full mx-auto rounded-3xl py-24">
        <label className="font-normal text-lg sm:p-0 pl-5">
          Enter position:
          <input
            type="number"
            placeholder={`amount (${network} chain)`}
            className="px-4 py-3 w-96 sm:ml-3 ml-0 rounded-3xl text-black"
          />
        </label>
        <button className="primary-btn sm:w-1/4 w-1/3">Stake</button>
      </div>
    </div>
  );
}
