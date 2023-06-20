"use client";

import Image from "next/image";
import Currency from "@/images/currency.png";
import Dropdown from "@/components/dropdown";
import { useState } from "react";
import { supplyData, borrowData } from "@/lib/tableData";
import Link from "next/link";

export default function page() {
  const [network, setNetwork] = useState("Ethereum");

  const networkOptions = ["Ethereum", "Polygon", "Solana"];

  const handleNetwork = (e) => {
    setNetwork(e.target.value);
  };

  return (
    <div className="mt-20 m-32">
      {/* stats section */}
      <div className="flex justify-between items-center">
        <div className="flex gap-10 items-center -mt-20">
          <div className="flex gap-5 items-center h-14">
            <Image src={Currency} alt="currency logo" />
            <div>
              <h1 className="text-2xl">Net Worth</h1>
              <p className="font-bold text-3xl text-yellow-300">$100,000</p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl">Net APY</h1>
            <p className="font-bold text-3xl text-yellow-300">--</p>
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

      {/* user assets section */}
      <div className="flex gap-10 justify-center mb-10">
        <div className="data-box">
          <h1>Your supplies</h1>
          <p>Nothing supplied yet</p>
        </div>
        <div className="data-box">
          <h1>Your borrows</h1>
          <p>Nothing borrowed yet</p>
        </div>
      </div>

      {/* interxchange assets sections */}
      <div className="flex gap-10 justify-center">
        <div className="table-box">
          <h1>Assets to supply</h1>
          <table>
            <thead>
              <tr>
                <td>Assets</td>
                <td>Worth</td>
                <td>APY</td>
                <td>Supported collateral</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {supplyData.map((data) => (
                <tr key={data.asset}>
                  <td>
                    <div>
                      <Image src={data.logo()} alt="" />
                      <p>{data.asset}</p>
                    </div>
                  </td>
                  <td>{data.worth}</td>
                  <td>{data.apy}</td>
                  <td>
                    <Image src={data.collateral()} alt="" />
                  </td>
                  <td
                    className={
                      data.button === "Supply" && !data.disbled
                        ? "supply-btn"
                        : data.button === "Claim"
                        ? "claim-btn"
                        : "disabled-btn"
                    }
                  >
                    <Link href={"/"}>{data.button}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="table-box">
          <h1>Assets to borrow</h1>
          <table>
            <thead>
              <tr>
                <td>Assets</td>
                <td>Available</td>
                <td>APY</td>
                <td>APY, stable</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {borrowData.map((data) => (
                <tr key={data.asset}>
                  <td>
                    <div>
                      <Image src={data.logo()} alt="" />
                      <p>{data.asset}</p>
                    </div>
                  </td>
                  <td>{data.available}</td>
                  <td>{data.apy}</td>
                  <td>{data.stable}</td>
                  <td
                    className={
                      data.button === "enabled" ? "supply-btn" : "disabled-btn"
                    }
                  >
                    <Link href={"/"}>Borrow</Link>
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
