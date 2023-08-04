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
    <div className="mini-page m-5 sm:m-32 sm:mt-20">
      <div className="mb-24 flex items-center justify-between sm:mb-10">
        <h1 className="ml-9 text-4xl font-black text-yellow-200 sm:ml-24 md:text-center">
          Pools
        </h1>
        <Dropdown
          label={network}
          options={networkOptions}
          onClick={handleNetworkChange}
        />
      </div>
      <div className="mx-auto flex w-full flex-col items-center gap-14 rounded-3xl border-2 py-14 sm:w-3/4 sm:py-24">
        <button className="primary-btn w-1/3">Add position +</button>
        <p className="text-2xl font-normal md:text-center">
          Your active liquidity positions will appear here
        </p>
      </div>
    </div>
  );
}
