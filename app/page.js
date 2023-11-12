"use client";

import Image from "next/image";
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
import Center from "@/components/center";

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
    <Center>
      <main>
        <section>
          <div className="m-10 lg:m-24">
            <h1 className="mb-2 hidden text-center text-5xl font-bold lg:mb-16 lg:block lg:text-left lg:text-7xl">
              InterXchange
            </h1>

            <div className="flex flex-col gap-0 lg:flex-row lg:gap-20">
              <div className=" lg:relative lg:mt-8 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
                <Image
                  src={Dots}
                  alt=""
                  className="hidden lg:absolute  lg:z-10 lg:block lg:w-5/6"
                />

                <Image
                  src={Logo}
                  alt="interxchange"
                  className=" hidden lg:absolute  lg:z-20 lg:block lg:w-1/2"
                />
              </div>

              <div className="relative z-10 mb-10 flex h-1/2 w-full flex-col items-center pt-16 lg:mb-0 lg:h-auto lg:w-1/2 lg:items-start lg:justify-start">
                <h2 className="z-10 -mt-16 mb-10 text-center text-3xl font-bold lg:mt-0 lg:text-left lg:text-5xl">
                  Welcome to InterXchange
                </h2>

                <div className="z-10 mb-10 lg:mb-0">
                  <p className="mb-10 text-center text-lg font-normal lg:text-left lg:text-2xl">
                    the platform that allows you to borrow ERC-20 tokens using
                    your ERC-721 tokens as collateral
                  </p>

                  <p className="mb-16 text-center text-lg font-normal lg:mb-10 lg:text-left lg:text-2xl">
                    Are you tired of having to sell your valuable ERC-721 assets
                    just to borrow ERC-20 tokens? With Interswap, you can easily
                    borrow the tokens you need without having to sacrifice your
                    assets.
                  </p>
                </div>

                <Image
                  src={Logo}
                  alt="interxchange"
                  className="absolute top-40 z-0 h-60  w-60 brightness-75 sm:top-12 lg:hidden"
                />

                <Link href="/dashboard" className="primary-btn">
                  Launch App
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mt-10 lg:mt-80">
            <h2 className="ml-auto mr-auto w-full px-10 text-center text-3xl font-bold lg:w-3/4 lg:px-0 lg:text-5xl">
              Start experiencing the future of token borrowing with
              Interxchange.
            </h2>

            <div className="mb-20 mt-10 w-full lg:mb-52">
              <Image src={Icons1} alt="supported tokens" width={3840} />
              <Image src={Icons2} alt="supported tokens" width={3840} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-10 text-center text-3xl font-bold lg:text-5xl">
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

          <div className="mb-20 mt-12 flex w-full justify-center lg:mb-36 lg:mt-16">
            <button className="primary-btn">Load more</button>
          </div>
        </section>
      </main>

      <footer>
        <Image src={FooterImg} alt="footer image" />
      </footer>
    </Center>
  );
}
