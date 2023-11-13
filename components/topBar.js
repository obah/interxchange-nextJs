import React from "react";

function TopBar({ heading, body, stat }) {
  return (
    <>
      {stat ? (
        <div>
          <h1 className="text-md mb-2 text-center sm:text-2xl">{heading}</h1>

          <p className="text-lg font-bold text-yellow-300 sm:text-3xl md:text-center">
            {body}
          </p>
        </div>
      ) : (
        <div className="w-full rounded-3xl border p-5 lg:w-[512px] lg:min-w-[480px] lg:border-2">
          <h1 className="mb-5 text-lg font-bold lg:mb-10 lg:text-center lg:text-3xl">
            {heading}
          </h1>

          <p className="text-sm font-light lg:text-center lg:text-2xl">
            {body}
          </p>
        </div>
      )}
    </>
  );
}

export default TopBar;
