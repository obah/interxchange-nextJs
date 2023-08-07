"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header({ show }) {
  const [wallet, setWallet] = useState("connect");
  const path = usePathname();

  const handleConnect = () => {
    if (wallet === "connect") {
      setWallet("0x79B0…4E71");
    } else {
      setWallet("connect");
    }
  };

  const inactiveLink = "font-bold text-3xl lg:text-4xl hover:text-yellow-300";
  const activeLink = inactiveLink + " underline";

  return (
    <header>
      <div
        className={
          (show ? "top-20" : "-top-full") +
          " fixed z-10 flex h-screen w-screen flex-col bg-[#0c1021] p-8 transition-all lg:static lg:h-auto lg:w-full lg:bg-transparent"
        }
      >
        <div className="mb-10 flex justify-center lg:mb-16 lg:justify-between">
          <Link
            href={"/"}
            className="hidden font-bold hover:text-yellow-300 lg:block lg:text-7xl"
          >
            InterXchange
          </Link>
          <button onClick={handleConnect} className="primary-btn">
            {wallet}
          </button>
        </div>
        <div>
          <nav className="mx-auto flex w-full flex-col items-center gap-12 lg:w-2/3 lg:flex-row lg:justify-between lg:gap-20">
            <Link
              href={"/dashboard"}
              className={
                path.includes("/dashboard") ? activeLink : inactiveLink
              }
            >
              Dashboard
            </Link>
            <Link
              href={"/market"}
              className={path.includes("/market") ? activeLink : inactiveLink}
            >
              Market
            </Link>
            <Link
              href={"/pool"}
              className={path.includes("/pool") ? activeLink : inactiveLink}
            >
              Pool
            </Link>
            <Link
              href={"/stake"}
              className={path.includes("/stake") ? activeLink : inactiveLink}
            >
              Stake
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
