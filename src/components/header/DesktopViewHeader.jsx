import React from "react";
import logoMicaClick from "/logos/micaclick_logo.svg";
import Buttons from "../ui/Buttons";
import TheCartSideBar from "./CartSideBar";
import TheSearchBar from "./SearchBar";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DesktopViewHeader() {
  return (
    <>
      {/* LOGO */}
      <div className="flex items-center">
        <a href="/" className="flex flex-row gap-x-1.5 items-end">
          <img
            src={logoMicaClick}
            alt="MicaClick_Logo"
            className="w-8.5 h-8.5"
          />
          <h1 className="font-momoTrust text-2xl font-bold text-vintageGreen">
            MicaClick
          </h1>
        </a>
      </div>
      {/* FILTER ITEMS */}
      <div className="bg-white px-4 py-1 w-1/2 max-w-full flex flex-row items-center rounded-md">
        <TheSearchBar />
      </div>
      {/* BUTTONS USER & CART */}
      <div className="flex flex-row gap-x-5">
        <Buttons
          id="btnUserLog"
          type="button"
          onClick={() => {}}
          icon={<FaUser className="text-2xl text-vintageGray" />}
        />
        <Link to="/payment-method">
          <FaShoppingCart className="text-2xl text-vintageGreen" />
        </Link>
      </div>
      {/* CART SIDEBAR */}
      <TheCartSideBar />
    </>
  );
}
