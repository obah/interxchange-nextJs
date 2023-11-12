"use client";

import Image from "next/image";
import Dropdown from "./dropdown";
import backArrow from "@/images/back-arrow.png";
import usdc from "@/images/usdc.png";
import eth from "@/images/eth.png";
import { useState } from "react";
import Button from "./button";

export default function Borrow({ close }) {
  const [token, setToken] = useState("ETH");

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const tokenOptions = ["ETH", "USDC", "USDT", "DAI", "WBTC", "FRAX"];
  const h2Style = "font-light text-lg md:text-2xl mb-2 md:text-center";
  const pStyle = "font-black text-lg md:text-2xl md:text-center";

  return (
    <div>
      <div className="mb-7 flex justify-between">
        <Button handler={close} role="back">
          <Image src={backArrow} alt="" />
        </Button>

        <h1 className="hidden text-3xl font-bold md:block md:text-center">
          Borrow
        </h1>

        <p className={h2Style}>ETH/USDC</p>
      </div>

      <div className="mb-10 flex justify-center">
        <Dropdown
          label={token}
          options={tokenOptions}
          onClick={handleTokenChange}
        />
      </div>

      <div className="mb-10 flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="mb-10 flex flex-col gap-1">
            <input
              type="number"
              placeholder="amount"
              className="w-full rounded-3xl px-4 py-2 text-black lg:w-96"
            />

            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <Image src={usdc} alt="" />
                <h2 className={pStyle}>USDC</h2>
              </div>

              <p className="text-xs font-thin md:text-center">
                BMax: 106,241.3USDC
              </p>
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
        <Button handler={close} role="supply" className="font-semibold">
          Borrow
        </Button>
      </div>
    </div>
  );
}
