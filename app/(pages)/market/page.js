"use client";

import Image from "next/image";
import Dropdown from "@/components/dropdown";
import { useState } from "react";
import { tokenData } from "@/lib/tableData";

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

  return (
    <div className="m-5 mb-20 sm:m-32 sm:mt-20">
      {/* stats section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:-mt-20 sm:gap-10">
          <div className="flex h-10 items-center gap-2 sm:h-14 sm:gap-5">
            <div>
              <h1 className="text-md mb-2 text-center sm:text-2xl">
                Total Market Size
              </h1>
              <p className="text-lg font-bold text-yellow-300 sm:text-3xl md:text-center">
                $10B
              </p>
            </div>
          </div>
          <div>
            <h1 className="mb-2 text-lg sm:text-2xl md:text-center">
              Total Available
            </h1>
            <p className="text-xl font-bold text-yellow-300 sm:text-3xl md:text-center">
              $6.2B
            </p>
          </div>
          <div>
            <h1 className="mb-2 text-lg sm:text-2xl md:text-center">
              Total Borrowed
            </h1>
            <p className="text-xl font-bold text-yellow-300 sm:text-3xl md:text-center">
              $3.8B
            </p>
          </div>
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
        {/* table section */}
        <div className="table-box table-mini w-auto sm:w-5/6">
          <h2 className="text-2xl font-bold md:text-center">
            {network} {tableType} assets
          </h2>
          <table>
            <thead>
              <tr>
                <td>Assets</td>
                <td>Total pool supply</td>
                <td>Supply APY</td>
                <td>Total borrowed</td>
                <td>Borrow APY, variable</td>
                <td>Borrow APY, stable</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {tokenData.map((data) => (
                <tr key={data.asset}>
                  <td>
                    <div>
                      <Image src={data.logo()} alt="" />
                      <p className="md:text-center">{data.asset}</p>
                    </div>
                  </td>
                  <td>{data.pool}</td>
                  <td>{data.supply_apy}</td>
                  <td>{data.borrowed}</td>
                  <td>{data.variable_apy}</td>
                  <td>{data.stable_apy}</td>
                  <td>
                    <a
                      href={data.pageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="supply-btn"
                    >
                      Details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
