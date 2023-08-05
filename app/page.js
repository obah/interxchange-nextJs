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
    <>
      <main>
        {/* top section */}
        <section>
          <div className="top-section m-10 sm:m-24">
            <div>
              <h1 className="mb-2 text-center text-5xl font-bold sm:mb-16 sm:text-7xl md:text-left">
                InterXchange
              </h1>
              <Image src={Logo} alt="interxchange" className="logo hidden" />
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-20">
              <div className=" sm:relative sm:mt-8 sm:w-1/2">
                <Image
                  src={Dots}
                  alt="vetor dots"
                  className="heroImg sm:absolute sm:left-0 sm:top-0 sm:z-10"
                />
                <Image
                  src={Logo}
                  alt="interxchange"
                  className="heroImg sm:absolute sm:left-0 sm:top-0 sm:z-20 sm:ml-28 sm:mt-24"
                />
              </div>
              <div className="flex flex-col pt-16 sm:w-1/2">
                <h2 className="z-10 -mt-16 mb-10 text-center text-3xl font-bold sm:mt-0 sm:text-5xl md:text-left">
                  Welcome to InterXchange
                </h2>
                <div className="z-10">
                  <p className="mb-10 text-center text-lg font-normal sm:text-2xl md:text-left">
                    the platform that allows you to borrow ERC-20 tokens using
                    your ERC-721 tokens as collateral
                  </p>
                  <p className="mb-16 text-center text-lg font-normal sm:mb-20 sm:text-2xl md:text-left">
                    Are you tired of having to sell your valuable ERC-721 assets
                    just to borrow ERC-20 tokens? With Interswap, you can easily
                    borrow the tokens you need without having to sacrifice your
                    assets.
                  </p>
                </div>
                <div className="mbr">
                  <Link
                    href="/dashboard"
                    className="primary-btn w-1/2 sm:w-1/3"
                  >
                    Launch App
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* mid section */}
        <section>
          <div className="mt-10 sm:mt-80">
            <h2 className="ml-auto mr-auto w-3/4 text-center text-3xl font-bold sm:text-5xl">
              Start experiencing the future of token borrowing with
              Interxchange.
            </h2>
            <div className="mb-20 mt-10 w-full sm:mb-52">
              <Image src={Icons1} alt="supported tokens" width={3840} />
              <Image src={Icons2} alt="supported tokens" width={3840} />
            </div>
          </div>
        </section>

        {/* final section */}
        <section>
          <h2 className="mb-10 text-center text-3xl font-bold sm:text-5xl">
            Supported NFTs
          </h2>
          <div className="flex justify-center gap-5">
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
              <div key={items.heading}>
                <Card
                  pageUrl={items.pageUrl}
                  image={items.imageSrc()}
                  heading={items.heading}
                  body={items.body}
                  btnImg={require("../images/arrow.png")}
                />
              </div>
            ))}
          </div>
          <div className="mb-20 mt-12 flex w-full justify-center sm:mb-36 sm:mt-16">
            <button className="primary-btn">Load more</button>
          </div>
        </section>
      </main>
      <footer>
        <Image src={FooterImg} alt="footer image" />
      </footer>
    </>
  );
}
