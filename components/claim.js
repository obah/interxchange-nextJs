import Image from "next/image";
import backArrow from "@/images/back-arrow.png";
import bayc from "@/images/bayc.png";
import eth from "@/images/eth.png";
import usdc from "@/images/usdc.png";

export default function Claim({ close }) {
  const h2Style = "font-light sm:text-2xl text-lg mb-2";
  const pStyle = "sm:font-extrabold font-bold sm:text-3xl text-lg";
  const mifp = "flex flex-col items-center gap-1";

  return (
    <div>
      <div className="flex justify-between mb-7">
        <button onClick={close} className="back-btn">
          <Image src={backArrow} alt="" />
        </button>
        <h1 className="font-bold text-3xl">Claim</h1>
        <h2 className={h2Style}>ETH/USDC</h2>
      </div>
      <div className="flex gap-5 sm:gap-10 justify-center my-36">
        <div className="flex flex-col items-center">
          <Image src={bayc} alt="" width={80} height={80} />
          <p className={h2Style}>BAYC</p>
        </div>
        <div className="w-1/2 flex flex-wrap gap-3 sm:gap-8">
          <div className={mifp}>
            <h2 className={h2Style}>Worth</h2>
            <div className="flex gap-2">
              <Image src={eth} alt="" />
              <p className={pStyle}>64.9</p>
            </div>
          </div>
          <div className={mifp}>
            <h2 className={h2Style}>Borrowed</h2>
            <div className="flex gap-2">
              <Image src={usdc} alt="" />
              <p className={pStyle}>96,000</p>
            </div>
          </div>
          <div>
            <div>
              <h2 className={h2Style}>APY</h2>
              <p className={pStyle}>7.5%</p>
            </div>
          </div>
          <div className={mifp}>
            <h2 className={h2Style}>Amount owed</h2>
            <div className="flex gap-2">
              <Image src={usdc} alt="" />
              <p className={pStyle + " text-yellow-200"}>103,200</p>
            </div>
          </div>
          <div>
            <div>
              <h2 className={h2Style}>Duration</h2>
              <p className={pStyle}>365 Days</p>
            </div>
          </div>
          <div>
            <div>
              <h2 className={h2Style}>Due Duration</h2>
              <p className={pStyle}>In 2 days</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button onClick={close} className="claim-btn font-semibold">
          Claim
        </button>
      </div>
    </div>
  );
}
