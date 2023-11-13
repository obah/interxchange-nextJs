import Button from "./button";
import Image from "next/image";

function Table({ headData, tableData, heading, type, handler1, handler2 }) {
  return (
    <div
      className={`table-box ${
        type === "market" ? "w-auto sm:w-5/6" : "w-full lg:w-[512px]"
      } `}
    >
      <h1 className="lg:text-center">{heading}</h1>

      <table>
        <thead>
          <tr>
            {headData.map((data) => (
              <td key={data}>{data}</td>
            ))}
            <td></td>
          </tr>
        </thead>

        <tbody>
          {tableData.map((data) => (
            <tr key={data.asset}>
              <td>
                <div>
                  <Image src={data.logo()} alt="" />
                  <p className="md:text-center">{data.asset}</p>
                </div>
              </td>

              {type === "supply" && (
                <>
                  <td>{data.worth}</td>
                  <td>{data.apy}</td>
                  <td>
                    <Image src={data.collateral()} alt="" />
                  </td>

                  {data.button === "Supply" && !data.disbled ? (
                    <td>
                      <Button role="supply" handler={handler1}>
                        {data.button}
                      </Button>
                    </td>
                  ) : data.button === "Claim" ? (
                    <td>
                      <Button handler={handler2} role="claim">
                        {data.button}
                      </Button>
                    </td>
                  ) : (
                    <td>
                      <Button role="disabled">{data.button}</Button>
                    </td>
                  )}
                </>
              )}

              {type === "borrow" && (
                <>
                  <td>{data.available}</td>
                  <td>{data.apy}</td>
                  <td>{data.stable}</td>
                  {data.button === "enabled" ? (
                    <td>
                      <Button handler={handler1} role="supply">
                        Borrow
                      </Button>
                    </td>
                  ) : (
                    <td>
                      <Button role="disabled">Borrow</Button>
                    </td>
                  )}
                </>
              )}

              {type === "market" && (
                <>
                  <td>{data.pool}</td>
                  <td>{data.supply_apy}</td>
                  <td>{data.borrowed}</td>
                  <td>{data.variable_apy}</td>
                  <td>{data.stable_apy}</td>
                  <td>
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
