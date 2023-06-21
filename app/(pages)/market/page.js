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
    <div className="sm:mt-20 sm:m-32 m-5 mb-20">
      {/* stats section */}
      <div className="flex justify-between items-center">
        <div className="flex sm:gap-10 gap-2 items-center sm:-mt-20">
          <div className="flex sm:gap-5 gap-2 items-center sm:h-14 h-10">
            <div>
              <h1 className="sm:text-2xl text-md mb-2">Total Market Size</h1>
              <p className="font-bold sm:text-3xl text-lg text-yellow-300">
                $10B
              </p>
            </div>
          </div>
          <div>
            <h1 className="sm:text-2xl text-lg mb-2">Total Available</h1>
            <p className="font-bold sm:text-3xl text-xl text-yellow-300">
              $6.2B
            </p>
          </div>
          <div>
            <h1 className="sm:text-2xl text-lg mb-2">Total Borrowed</h1>
            <p className="font-bold sm:text-3xl text-xl text-yellow-300">
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
      <div className="flex flex-col items-center sm:w-3/4 w-full sm:mt-0 mt-8 mx-auto">
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
        <div className="table-box table-mini sm:w-5/6 w-auto">
          <h2 className="font-bold text-2xl">
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
                      <p>{data.asset}</p>
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
