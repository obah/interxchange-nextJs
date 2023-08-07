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
    <div className="m-5 h-screen sm:m-32 sm:mt-20">
      <div className="mb-24 flex items-center justify-between sm:mb-10">
        <h1 className="ml-9 text-4xl font-black text-yellow-200 sm:ml-24 md:text-center">
          Staking
        </h1>
        <Dropdown
          label={network}
          options={networkOptions}
          onClick={handleNetworkChange}
        />
      </div>
      <div className="mx-auto flex w-full flex-col items-center gap-8 rounded-3xl border-2 py-24 sm:w-3/4">
        <label className="pl-5 text-lg font-normal sm:p-0 sm:text-2xl">
          Enter position:
          <input
            type="number"
            placeholder={`amount (${network} chain)`}
            className="ml-0 w-96 rounded-3xl px-4 py-3 text-black sm:ml-3"
          />
        </label>
        <button className="primary-btn w-1/3 sm:w-1/4">Stake</button>
      </div>
    </div>
  );
}
