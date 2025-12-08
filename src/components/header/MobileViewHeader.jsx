import React from "react";
import logoMicaClick from "/logos/micaclick_logo.svg";
import TheSearchBar from "./SearchBar";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MobileViewHeader({
  openSideBar,
  setOpenSideBar,
  itemsSearch,
  setItemsSearch,
}) {
  return (
    <>
      <div className="w-full max-w-full flex flex-row items-center justify-between gap-x-5">
        {/* LOGO */}
        <div className="m-auto flex items-center">
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
        <Link to="/payment-method">
          <FaShoppingCart className="text-3xl text-vintageGreen" />
        </Link>
      </div>
      {/* FILTER ITEMS */}
      <div className="bg-white px-4 py-1 w-full max-w-full flex flex-row items-center rounded-md">
        <TheSearchBar
          itemsSearch={itemsSearch}
          setItemsSearch={setItemsSearch}
        />
      </div>
    </>
  );
}
