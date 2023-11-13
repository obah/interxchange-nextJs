import Button from "./button";
import Image from "next/image";

function Table({ headData, tableData, heading, type, handler1, handler2 }) {
  const tdStyle =
    "w-full px-1 py-2 text-xs sm:px-2 sm:py-3 lg:px-4 lg:py-5 lg:text-sm";

  return (
    <div
      className={`mb-5 rounded-3xl border p-3 md:mb-7 lg:mb-10 lg:border-2 lg:p-5 ${
        type === "market" ? " w-auto sm:w-5/6" : " w-full lg:w-[512px]"
      } `}
    >
      <h1 className="mb-3 text-xl font-bold lg:mb-7 lg:text-center lg:text-3xl">
        {heading}
      </h1>

      <table>
        <thead className="text-xs font-normal">
          <tr>
            {headData.map((data) => (
              <td className={tdStyle} key={data}>
                {data}
              </td>
            ))}
            <td className={tdStyle}></td>
          </tr>
        </thead>

        <tbody>
          {tableData.map((data) => (
            <tr key={data.asset} className="border-t">
              <td
                className={tdStyle + (type === "market" && " flex items-start")}
              >
                <div className="flex flex-col items-center justify-between">
                  <Image src={data.logo()} alt="" />
                  <p className="md:text-center">{data.asset}</p>
                </div>
              </td>

              {type === "supply" && (
                <>
                  <td className={tdStyle}>{data.worth}</td>
                  <td className={tdStyle}>{data.apy}</td>
                  <td className={tdStyle}>
                    <Image src={data.collateral()} alt="" />
                  </td>

                  {data.button === "Supply" && !data.disbled ? (
                    <td className={tdStyle}>
                      <Button role="supply" handler={handler1}>
                        {data.button}
                      </Button>
                    </td>
                  ) : data.button === "Claim" ? (
                    <td className={tdStyle}>
                      <Button handler={handler2} role="claim">
                        {data.button}
                      </Button>
                    </td>
                  ) : (
                    <td className={tdStyle}>
                      <Button role="disabled">{data.button}</Button>
                    </td>
                  )}
                </>
              )}

              {type === "borrow" && (
                <>
                  <td className={tdStyle}>{data.available}</td>
                  <td className={tdStyle}>{data.apy}</td>
                  <td className={tdStyle}>{data.stable}</td>
                  {data.button === "enabled" ? (
                    <td className={tdStyle}>
                      <Button handler={handler1} role="supply">
                        Borrow
                      </Button>
                    </td>
                  ) : (
                    <td className={tdStyle}>
                      <Button role="disabled">Borrow</Button>
                    </td>
                  )}
                </>
              )}

              {type === "market" && (
                <>
                  <td className={tdStyle}>{data.pool}</td>
                  <td className={tdStyle}>{data.supply_apy}</td>
                  <td className={tdStyle}>{data.borrowed}</td>
                  <td className={tdStyle}>{data.variable_apy}</td>
                  <td className={tdStyle}>{data.stable_apy}</td>
                  <td className={tdStyle}>
                    <Button
                      url={data.pageUrl}
                      role="supply"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Details
                    </Button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
