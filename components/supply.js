import Image from "next/image";
import bayc from "@/images/bayc.png";
import backArrow from "@/images/back-arrow.png";

export default function Supply({ close }) {
  return (
    <div>
      <div>
        <button onClick={close} className="back-btn">
          <Image src={backArrow} alt="" />
        </button>
        <h1 className="font-bold text-3xl flex justify-center">Supply</h1>
      </div>
      <div className="font-normal text-2xl w-1/3 my-10 mx-auto flex flex-col items-center justify-center gap-10">
        <Image src={bayc} alt="" width={80} height={80} />
        <h1>BAYC</h1>
        <p>Confirm you want supply BAYC worth 64.0 ETH as collateral</p>
      </div>
      <div className="flex justify-center">
        <button onClick={close} className="supply-btn font-semibold">
          Supply
        </button>
      </div>
    </div>
  );
}
