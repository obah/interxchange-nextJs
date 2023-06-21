"use client";

import Image from "next/image";
import Dropdown from "./dropdown";
import backArrow from "@/images/back-arrow.png";
import usdc from "@/images/usdc.png";
import eth from "@/images/eth.png";
import { useState } from "react";

export default function Borrow({ close }) {
  const [token, setToken] = useState("ETH");

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const tokenOptions = ["ETH", "USDC", "USDT", "DAI", "WBTC", "FRAX"];
  const h2Style = "font-light text-2xl mb-2";
  const pStyle = "font-black text-2xl";

  return (
    <div>
      <div className="flex justify-between mb-7">
        <button onClick={close} className="back-btn">
          <Image src={backArrow} alt="" />
        </button>
        <h1 className="font-bold text-3xl">Borrow</h1>
        <p className={h2Style}>ETH/USDC</p>
      </div>
      <div className="flex justify-center mb-10">
        <Dropdown
          label={token}
          options={tokenOptions}
          onClick={handleTokenChange}
        />
      </div>
      <div className="flex justify-center mb-10">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-1 mb-10">
            <input
              type="number"
              placeholder="amount"
              className="px-4 py-2 w-96 rounded-3xl text-black"
            />
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <Image src={usdc} alt="" />
                <h2 className={pStyle}>USDC</h2>
              </div>
              <p className="font-thin text-xs">BMax: 106,241.3USDC</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className={h2Style}>NFT Worth</h2>
              <div className="flex gap-2">
                <Image src={eth} alt="" />
                <p className={pStyle}>64.9</p>
              </div>
            </div>
            <div>
              <h2 className={h2Style}>APY</h2>
              <p className={pStyle}>7.5%</p>
            </div>
            <div>
              <h2 className={h2Style}>Duration</h2>
              <p className={pStyle}>365 Days</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button onClick={close} className="supply-btn font-semibold">
          Borrow
        </button>
      </div>
    </div>
  );
}
