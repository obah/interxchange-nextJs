"use client";

import Dropdown from "@/components/dropdown";
import { useState } from "react";

export default function page() {
  const [network, setNetwork] = useState("Ethereum");
  const networkOptions = ["Ethereum", "Polygon"];
  const handleNetworkChange = (e) => {
    setNetwork(e.target.value);
  };

  return (
    <div className="mt-20 m-32">
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-black text-4xl text-yellow-200 ml-24">Staking</h1>
        <Dropdown
          label={network}
          options={networkOptions}
          onClick={handleNetworkChange}
        />
      </div>
      <div className="flex flex-col gap-8 items-center border-2 w-3/4 mx-auto rounded-3xl py-24">
        <label className="font-normal text-lg">
          Enter position:
          <input
            type="number"
            placeholder={`amount (in ${network})`}
            className="px-4 py-3 w-96 ml-3 rounded-3xl text-black"
          />
        </label>
        <button className="primary-btn w-1/4">Stake</button>
      </div>
    </div>
  );
}
