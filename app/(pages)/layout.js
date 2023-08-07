"use client";

import Header from "@/components/header";
import { MenuIcon, CloseMenuIcon } from "@/components/menuIcon";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Center from "@/components/center";

export default function layout({ children }) {
  const [showNav, setShowNav] = useState(false);

  const path = usePathname();

  useEffect(() => {
    setShowNav(false);
  }, [path]);

  return (
    <Center>
      <div className="flex w-screen items-center justify-between p-5 pb-0 lg:hidden">
        <Link
          href={"/"}
          className="text-4xl font-bold hover:text-yellow-300 lg:text-7xl"
        >
          InterXchange
        </Link>
        <button onClick={() => setShowNav(!showNav)}>
          {!showNav ? <MenuIcon /> : <CloseMenuIcon />}
        </button>
      </div>
      <Header show={showNav} />
      <div>{children}</div>
    </Center>
  );
}
