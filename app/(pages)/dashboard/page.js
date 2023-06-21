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
    <div className="sm:mt-20 sm:m-32 m-10">
      {/* stats section */}
      <div className="flex justify-between items-center">
        <div className="flex sm:gap-10 gap-3 items-center sm:-mt-20">
          <div className="flex sm:gap-5 gap-2 items-center sm:h-14 h-10">
            <Image src={Currency} alt="" className="mobile-img" />
            <div>
              <h1 className="text-lg sm:text-2xl">Net Worth</h1>
              <p className="font-bold text-xl sm:text-3xl text-yellow-300">
                $100,000
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-normal sm:text-2xl">Net APY</h1>
            <p className="font-bold text-xl sm:text-3xl text-yellow-300">--</p>
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
      <div className="dashboard-stats flex gap-10 justify-center mt-10 mb-10">
        <div className="data-box">
          <h1>Your supplies</h1>
          <p>Nothing supplied yet</p>
        </div>
        <div className="data-box">
          <h1>Your borrows</h1>
          <p>Nothing borrowed yet</p>
        </div>
      </div>

      {/* interxchange assets sections */}
      <div className="mobile-table flex gap-10 justify-center">
        <div className="table-box sm:w-2/5 w-full">
          <h1>Assets to supply</h1>
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
                      <p>{data.asset}</p>
                    </div>
                  </td>
                  <td>{data.worth}</td>
                  <td>{data.apy}</td>
                  <td>
                    <Image src={data.collateral()} alt="" />
                  </td>
                  {data.button === "Supply" && !data.disbled ? (
                    <td>
                      <button onClick={openSupplyModal} className="supply-btn">
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
        <div className="table-box">
          <h1>Assets to borrow</h1>
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
                      <p>{data.asset}</p>
                    </div>
                  </td>
                  <td>{data.available}</td>
                  <td>{data.apy}</td>
                  <td>{data.stable}</td>
                  {data.button === "enabled" ? (
                    <td>
                      <button onClick={openBorrowModal} className="supply-btn">
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
  );
}
