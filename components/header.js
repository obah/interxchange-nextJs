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

  const inactiveLink = "font-bold text-3xl sm:text-4xl hover:text-yellow-300";
  const activeLink = inactiveLink + " underline";

  return (
    <header>
      <div
        className={
          (show ? "visible-head" : "hidden-head") +
          " my-5 mx-10 sm:my-10 sm:mx-20 transition-all"
        }
      >
        <div className="flex justify-between mb-10 sm:mb-16">
          <Link
            href={"/"}
            className="font-bold text-4xl sm:text-7xl hover:text-yellow-300"
          >
            InterXchange
          </Link>
          <button onClick={handleConnect} className="primary-btn">
            {wallet}
          </button>
        </div>
        <div>
          <nav className="flex justify-between w-2/3 mx-auto">
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
