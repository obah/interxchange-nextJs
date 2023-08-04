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
        <h1 className="flex justify-center text-3xl font-bold md:text-center">
          Supply
        </h1>
      </div>
      <div className="mx-auto my-10 flex w-full flex-col items-center justify-center gap-10 text-2xl font-normal sm:w-1/3">
        <Image src={bayc} alt="" width={80} height={80} />
        <h1 className="md:text-center">BAYC</h1>
        <p className="md:text-center">
          Confirm you want supply BAYC worth 64.0 ETH as collateral
        </p>
      </div>
      <div className="flex justify-center">
        <button onClick={close} className="supply-btn font-semibold">
          Supply
        </button>
      </div>
    </div>
  );
}
