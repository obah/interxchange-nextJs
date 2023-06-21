"use client";

import Header from "@/components/header";
import MenuIcon from "@/components/menuIcon";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function layout({ children }) {
  const [showNav, setShowNav] = useState(false);

  const path = usePathname();

  useEffect(() => {
    setShowNav(false);
  }, [path]);

  return (
    <>
      <div className="block flex items-center justify-between px-5 pt-5 md:hidden">
        <Link
          href={"/"}
          className="font-bold text-4xl sm:text-7xl hover:text-yellow-300"
        >
          InterXchange
        </Link>
        <button onClick={() => setShowNav(true)}>
          <MenuIcon />
        </button>
      </div>
      <Header show={showNav} />
      <div>{children}</div>
    </>
  );
}
