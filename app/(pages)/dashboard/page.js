"use client";

import Image from "next/image";
import Currency from "@/images/currency.png";
import Dropdown from "@/components/dropdown";
import { useState } from "react";
import {
  supplyData,
  borrowData,
  supplyHeadData,
  borrowHeadData,
} from "@/lib/tableData";
import ReactModal from "react-modal";
import Supply from "@/components/supply";
import Claim from "@/components/claim";
import Borrow from "@/components/borrow";
import Center from "@/components/center";
import Button from "@/components/button";
import TopBar from "@/components/topBar";
import Table from "@/components/table";

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

        <div className="flex flex-col justify-center gap-10 py-10 lg:flex-row">
          <TopBar heading="Your supplies" body="Nothing supplied yet" />
          <TopBar heading="Your borrows" body="Nothing borrowed yet" />
        </div>

        <div className="flex flex-col justify-center gap-10 lg:flex-row">
          <Table
            type="supply"
            heading="Assets to supply"
            headData={supplyHeadData}
            tableData={supplyData}
            handler1={openSupplyModal}
            handler2={openClaimModal}
          />

          <Table
            type="borrow"
            heading="Assets to borrow"
            headData={borrowHeadData}
            tableData={borrowData}
            handler1={openBorrowModal}
          />
        </div>

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
