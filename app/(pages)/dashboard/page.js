"use client";

import Image from "next/image";
import Currency from "@/images/currency.png";
import Dropdown from "@/components/dropdown";
import { useState } from "react";
import { supplyData, borrowData } from "@/lib/tableData";
import ReactModal from "react-modal";
import Supply from "@/components/supply";
import Claim from "@/components/claim";
import Borrow from "@/components/borrow";
import Center from "@/components/center";

// Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "transparent",
  },
  content: {
    background: "#0c1021",
    border: 0,
    borderRadius: "20px",
    padding: "40px",
  },
};

export default function page() {
  const [network, setNetwork] = useState("Ethereum");
  const [supplyModalIsOpen, setSupplyIsOpen] = useState(false);
  const [claimModalIsOpen, setClaimIsOpen] = useState(false);
  const [borrowModalIsOpen, setBorrowIsOpen] = useState(false);

  const networkOptions = ["Ethereum", "Polygon", "Solana"];

  const openSupplyModal = () => {
    setSupplyIsOpen(true);
  };
  const openClaimModal = () => {
    setClaimIsOpen(true);
  };
  const openBorrowModal = () => {
    setBorrowIsOpen(true);
  };

  const closeModal = () => {
    setSupplyIsOpen(false);
    setClaimIsOpen(false);
    setBorrowIsOpen(false);
  };

  const handleNetwork = (e) => {
    setNetwork(e.target.value);
  };

  return (
    <Center>
      <div className="mt-10 px-4 lg:px-32">
        {/* stats section */}
        <div className="flex w-auto items-center justify-between">
          <div className="-mt-10 flex items-center justify-between gap-3 lg:-mt-20">
            <div className="flex h-10 items-center gap-2 lg:h-14 lg:gap-5">
              <Image src={Currency} alt="" className="hidden md:block" />
              <div>
                <h1 className="text-lg lg:text-center lg:text-2xl">
                  Net Worth
                </h1>
                <p className="text-xl font-bold text-yellow-300 lg:text-center lg:text-3xl">
                  $100,000
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-normal lg:text-center lg:text-2xl">
                Net APY
              </h1>
              <p className="text-xl font-bold text-yellow-300 lg:text-center lg:text-3xl">
                --
              </p>
            </div>
          </div>
          <div>
            <Dropdown
              label={network}
              options={networkOptions}
              onClick={handleNetwork}
            />
          </div>
        </div>

        {/* user assets section */}
        <div className="flex flex-col justify-center gap-10 py-10 lg:flex-row">
          <div className="w-full rounded-3xl border p-5 lg:w-[512px] lg:min-w-[480px] lg:border-2">
            <h1 className="mb-5 text-lg font-bold lg:mb-10 lg:text-center lg:text-3xl">
              Your supplies
            </h1>
            <p className="text-sm font-light lg:text-center lg:text-2xl">
              Nothing supplied yet
            </p>
          </div>
          <div className="w-full rounded-3xl border p-5 lg:w-[512px] lg:min-w-[480px] lg:border-2">
            <h1 className="mb-5 text-lg font-bold lg:mb-10 lg:text-center lg:text-3xl">
              Your borrows
            </h1>
            <p className="text-sm font-light lg:text-center lg:text-2xl">
              Nothing borrowed yet
            </p>
          </div>
        </div>

        {/* interxchange assets sections */}
        <div className="flex flex-col justify-center gap-10 lg:flex-row">
          <div className="table-box w-full lg:w-[512px]">
            <h1 className="lg:text-center">Assets to supply</h1>
            <table>
              <thead>
                <tr>
                  <td>Assets</td>
                  <td>Worth</td>
                  <td>APY</td>
                  <td>Supported collateral</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {supplyData.map((data) => (
                  <tr key={data.asset}>
                    <td>
                      <div>
                        <Image src={data.logo()} alt="" />
                        <p className="lg:text-center">{data.asset}</p>
                      </div>
                    </td>
                    <td>{data.worth}</td>
                    <td>{data.apy}</td>
                    <td>
                      <Image src={data.collateral()} alt="" />
                    </td>
                    {data.button === "Supply" && !data.disbled ? (
                      <td>
                        <button
                          onClick={openSupplyModal}
                          className="supply-btn"
                        >
                          {data.button}
                        </button>
                      </td>
                    ) : data.button === "Claim" ? (
                      <td>
                        <button onClick={openClaimModal} className="claim-btn">
                          {data.button}
                        </button>
                      </td>
                    ) : (
                      <td>
                        <button className="disabled-btn">{data.button}</button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-box w-full lg:w-[512px]">
            <h1 className="lg:text-center">Assets to borrow</h1>
            <table>
              <thead>
                <tr>
                  <td>Assets</td>
                  <td>Available</td>
                  <td>APY</td>
                  <td>APY, stable</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {borrowData.map((data) => (
                  <tr key={data.asset}>
                    <td>
                      <div>
                        <Image src={data.logo()} alt="" />
                        <p className="lg:text-center">{data.asset}</p>
                      </div>
                    </td>
                    <td>{data.available}</td>
                    <td>{data.apy}</td>
                    <td>{data.stable}</td>
                    {data.button === "enabled" ? (
                      <td>
                        <button
                          onClick={openBorrowModal}
                          className="supply-btn"
                        >
                          Borrow
                        </button>
                      </td>
                    ) : (
                      <td>
                        <button className="disabled-btn">Borrow</button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* modals here */}
        <ReactModal
          isOpen={supplyModalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <Supply close={closeModal} />
        </ReactModal>
        <ReactModal
          isOpen={claimModalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <Claim close={closeModal} />
        </ReactModal>
        <ReactModal
          isOpen={borrowModalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <Borrow close={closeModal} />
        </ReactModal>
      </div>
    </Center>
  );
}
