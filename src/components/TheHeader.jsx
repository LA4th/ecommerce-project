import React from "react";
import logoMicaClick from "/logos/micaclick_logo.svg"
import Inputs from "./ui/inputs";
import Buttons from "./ui/Buttons";
import UseMobileView from "./hooks/UseMobileView";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export default function TheHeader ({ inputSearch }) {
  const mobileView = UseMobileView();

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="hidden w-full max-w-full md:flex flex-row items-center justify-between gap-x-5">
        {/* LOGO */}
        <div className="flex items-center">
          <a href="" className="flex flex-row gap-x-1.5 items-end">
            <img src={logoMicaClick} alt="MicaClick_Logo" className="w-8.5 h-8.5" />
            <h1 className="font-momoTrust text-2xl font-bold text-vintageGreen">MicaClick</h1>
          </a>
        </div>
        {/* FILTER ITEMS */}
        <div className="bg-vintageWhite px-4 py-1 w-1/2 max-w-full flex flex-row items-center rounded-md">
          <Inputs id="inputSearch" type="text" value={inputSearch} placeholder="Search for products..." className="w-full p-1" icon={ <CiSearch className="text-2xl" /> } />
        </div>
        {/* BUTTONS USER & CART */}
        <div className="flex flex-row gap-x-5">
          <Buttons id="btnUserLog" type="button" onClick={ () => {} } icon={ <FaUser className="text-2xl text-vintageGray" /> } />
          <Buttons id="btnCart" type="button" onClick={ () => {} } icon={ <FaShoppingCart className="text-2xl text-vintageGreen" /> } />
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden w-full max-w-full flex flex-row items-center justify-between gap-x-5">
        <Buttons id="btnBurder" type="button" onClick={ () => {} } icon={ <RxHamburgerMenu className="text-3xl" /> } />
        {/* LOGO */}
        <div className="flex items-center">
          <a href="" className="flex flex-row gap-x-1.5 items-end">
            <img src={logoMicaClick} alt="MicaClick_Logo" className="w-8.5 h-8.5" />
            <h1 className="font-momoTrust text-2xl font-bold text-vintageGreen">MicaClick</h1>
          </a>
        </div>
        <a href="#"><FaShoppingCart className="text-3xl text-vintageGreen" /></a>
      </div>
    </>
  );
};