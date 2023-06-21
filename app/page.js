"use client";

import Image from "next/image";
// import Dots from "../public/images/dots.png";
import Dots from "../images/dots.png";
import Logo from "../images/logo.png";
import Icons1 from "../images/icons1.png";
import Icons2 from "../images/icons2.png";
import FooterImg from "../images/footer.png";
import Dropdown from "@/components/dropdown";
import Link from "next/link";
import { useState } from "react";
import Card from "@/components/card";
import { cardItems } from "@/lib/tableData";

export default function Home() {
  const [chain, setChain] = useState("Blockchain");
  const [filter, setFilter] = useState("Filter");

  const chainOptions = ["Ethereum", "Polygon", "Solana"];
  const filterOptions = ["Experience", "Recent", "Price"];

  const handleChainChange = (e) => {
    setChain(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <main>
      {/* top section */}
      <div className="top-section m-10 sm:m-24">
        <div>
          <h1 className="font-bold text-5xl sm:text-7xl mb-2 sm:mb-16">
            InterXchange
          </h1>
          <Image src={Logo} alt="interxchange" className="hidden logo" />
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-20">
          <div className=" sm:relative sm:w-1/2 sm:mt-8">
            <Image
              src={Dots}
              alt="vetor dots"
              className="heroImg sm:absolute sm:top-0 sm:left-0 sm:z-10"
            />
            <Image
              src={Logo}
              alt="interxchange"
              className="heroImg sm:absolute sm:top-0 sm:left-0 sm:z-20 sm:ml-28 sm:mt-24"
            />
          </div>
          <div className="sm:w-1/2 flex flex-col pt-16">
            <h2 className="home-h2 mb-10 sm:mt-0 -mt-16 z-10">
              Welcome to InterXchange
            </h2>
            <div className="z-10">
              <p className="home-p mb-10">
                the platform that allows you to borrow ERC-20 tokens using your
                ERC-721 tokens as collateral
              </p>
              <p className="home-p sm:mb-20 mb-16">
                Are you tired of having to sell your valuable ERC-721 assets
                just to borrow ERC-20 tokens? With Interswap, you can easily
                borrow the tokens you need without having to sacrifice your
                assets.
              </p>
            </div>
            <div className="mbr">
              <Link href="/dashboard" className="primary-btn sm:w-1/3 w-1/2">
                Launch App
              </Link>
            </div>{" "}
            {/**made it this way to change size automatically */}
          </div>
        </div>
      </div>

      {/* mid section */}
      <div className="sm:mt-80 mt-10">
        <h2 className="home-h2 ml-auto mr-auto w-3/4 text-center">
          Start experiencing the future of token borrowing with Interxchange.
        </h2>
        <div className="w-full mt-10 sm:mb-52 mb-20">
          <Image src={Icons1} alt="supported tokens" width={3840} />
          <Image src={Icons2} alt="supported tokens" width={3840} />
        </div>
      </div>

      {/* final section */}
      <h2 className="home-h2 text-center mb-10">Supported NFTs</h2>
      <div className="flex gap-5 justify-center">
        <Dropdown
          label={chain}
          options={chainOptions}
          onClick={handleChainChange}
        />
        <Dropdown
          label={filter}
          options={filterOptions}
          onClick={handleFilterChange}
        />
      </div>
      <div>
        {cardItems.map((items) => (
          <Card
            pageUrl={items.pageUrl}
            image={items.imageSrc()}
            heading={items.heading}
            body={items.body}
            btnImg={require("../images/arrow.png")}
          />
        ))}
      </div>
      <div className="w-full flex justify-center sm:mt-16 mt-12 sm:mb-36 mb-20">
        <button className="primary-btn">Load more</button>
      </div>
      <footer>
        <Image src={FooterImg} alt="footer image" />
      </footer>
    </main>
  );
}
