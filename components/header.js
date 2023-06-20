"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  const inactiveLink = "font-bold text-3xl hover:text-yellow-300";
  const activeLink = inactiveLink + " underline";

  return (
    <header>
      <div className="my-10 mx-20">
        <div className="flex justify-between mb-16">
          <Link href={"/"} className="font-bold text-7xl hover:text-yellow-300">
            InterXchange
          </Link>
          <button className="primary-btn">connect</button>
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
