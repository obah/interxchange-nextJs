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
    <div className="mt-20 m-32">
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-black text-4xl text-yellow-200 ml-24">Pools</h1>
        <Dropdown
          label={network}
          options={networkOptions}
          onClick={handleNetworkChange}
        />
      </div>
      <div className="flex flex-col gap-14 items-center border-2 w-3/4 mx-auto rounded-3xl py-24">
        <button className="primary-btn w-1/3">Add position +</button>
        <p className="font-normal text-2xl">
          Your active liquidity positions will appear here
        </p>
      </div>
    </div>
  );
}
