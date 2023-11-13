"use client";

import Center from "@/components/center";
import Dropdown from "@/components/dropdown";
import Button from "@/components/button";
import { useState } from "react";

export default function page() {
  const [network, setNetwork] = useState("Ethereum");
  const networkOptions = ["Ethereum", "Polygon", "Solana"];
  const handleNetworkChange = (e) => {
    setNetwork(e.target.value);
  };

  return (
    <Center>
      <div className="m-5 h-screen lg:m-32 lg:mt-20">
        <div className=" mb-24 flex items-center justify-between lg:mb-10">
          <h1 className="-mt-2 ml-4 px-0 text-4xl font-black text-yellow-200 lg:ml-24 lg:text-center">
            Staking
          </h1>

          <Dropdown
            label={network}
            options={networkOptions}
            onClick={handleNetworkChange}
          />
        </div>

        <div className="mx-auto flex w-full flex-col items-center gap-8 rounded-3xl border-2 py-24 lg:w-3/4">
          <label className="pl-5 text-center text-lg font-normal lg:p-0 lg:text-left lg:text-2xl">
            Enter position:
            <input
              type="number"
              placeholder={`amount (${network} chain)`}
              className="ml-0 w-3/5 rounded-3xl py-3 pl-4 text-black lg:ml-3 lg:w-96"
            />
          </label>

          <Button role="primary" className="w-1/3 lg:w-1/4">
            Stake
          </Button>
        </div>
      </div>
    </Center>
  );
}
