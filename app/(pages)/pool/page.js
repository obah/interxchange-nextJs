"use client";

import Dropdown from "@/components/dropdown";
import { useState } from "react";
import Button from "@/components/button";

export default function page() {
  const [network, setNetwork] = useState("Ethereum");
  const networkOptions = ["Ethereum", "Polygon", "Solana"];
  const handleNetworkChange = (e) => {
    setNetwork(e.target.value);
  };

  return (
    <div className="m-5 h-screen lg:m-32 lg:mt-20">
      <div className="mb-24 flex items-center justify-between lg:mb-10">
        <h1 className="ml-9 py-0 text-4xl font-black text-yellow-200 lg:ml-24 lg:text-center">
          Pools
        </h1>

        <Dropdown
          label={network}
          options={networkOptions}
          onClick={handleNetworkChange}
        />
      </div>

      <div className="mx-auto flex w-full flex-col items-center gap-14 rounded-3xl border-2 py-14 lg:w-3/4 lg:py-24">
        <Button role="primary" className="w-1/3">
          Add position +
        </Button>

        <p className="text-center text-2xl font-normal">
          Your active liquidity positions will appear here
        </p>
      </div>
    </div>
  );
}
