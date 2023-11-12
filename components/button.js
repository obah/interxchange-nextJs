import Link from "next/link";
import React from "react";

function Button({ role, url, handler, className, children }) {
  const primaryBtn =
    "rounded-lg bg-yellow-200 px-6 py-4 text-lg  font-bold text-black hover:rounded-full hover:bg-yellow-300 sm:text-2xl lg:px-16 transition-all delay-75 ease-in-out";

  const supplyBtn =
    "rounded-3xl bg-yellow-300 px-4 py-2 text-black hover:bg-yellow-200";

  const claimBtn =
    "rounded-3xl bg-white px-5 py-2 text-black hover:bg-gray-300";

  const disabledBtn =
    "rounded-3xl bg-yellow-100 px-4 py-2 text-black hover:cursor-not-allowed";

  const backBtn = "rounded-full bg-black p-3";

  return (
    <>
      {url ? (
        <Link
          href={url}
          className={
            (role === "primary"
              ? primaryBtn
              : role === "supply"
              ? supplyBtn
              : role === "claim"
              ? claimBtn
              : role === "disabled"
              ? disabledBtn
              : backBtn) + ` ${className}`
          }
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={handler}
          className={
            (role === "primary"
              ? primaryBtn
              : role === "supply"
              ? supplyBtn
              : role === "claim"
              ? claimBtn
              : role === "disabled"
              ? disabledBtn
              : backBtn) + ` ${className}`
          }
        >
          {children}
        </button>
      )}
    </>
  );
}

export default Button;
