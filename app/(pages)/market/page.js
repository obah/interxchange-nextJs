"use client";

import Image from "next/image";
import Dropdown from "@/components/dropdown";
import { useState } from "react";
import { tokenData, marketHeadData } from "@/lib/tableData";
import Button from "@/components/button";
import Table from "@/components/table";
import TopBar from "@/components/topBar";

export default function page() {
  const [network, setNetwork] = useState("Ethereum");
  const [tableType, setTableType] = useState("Token");

  const handleTokenTable = () => {
    setTableType("Token");
  };
  const handleNftTable = () => {
    setTableType("NFT");
  };

  const networkOptions = ["Ethereum", "Polygon", "Solana"];
  const handleNetwork = (e) => {
    setNetwork(e.target.value);
  };

  const inactiveTable = "font-bold text-3xl hover:text-yellow-200 mr-14";
  const activeTable = inactiveTable + " underline";

  const heading = `${network} ${tableType} assets`;

  return (
    <div className="m-5 mb-20 sm:m-32 sm:mt-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:-mt-20 sm:gap-10">
          <TopBar stat heading="Total Market Size" body="$10B" />

          <TopBar stat heading="Total Available" body="$6.2B" />

          <TopBar stat heading="Total Borrowed" body="$3.8B" />
        </div>

        <div>
          <Dropdown
            label={network}
            options={networkOptions}
            onClick={handleNetwork}
          />
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full flex-col items-center sm:mt-0 sm:w-3/4">
        <div className="mb-8">
          <button
            onClick={handleTokenTable}
            className={tableType === "Token" ? activeTable : inactiveTable}
          >
            Tokens
          </button>

          <button
            onClick={handleNftTable}
            className={tableType === "NFT" ? activeTable : inactiveTable}
          >
            NFTs
          </button>
        </div>

        <Table
          type="market"
          heading={heading}
          headData={marketHeadData}
          tableData={tokenData}
        />
      </div>
    </div>
  );
}
