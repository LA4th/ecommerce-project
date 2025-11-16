import React, {useState} from "react";
import logoMicaClick from "/logos/micaclick_logo.svg"
import Inputs from "./ui/inputs";
import Buttons from "./ui/Buttons";
import TheCartSideBar from "./TheCartSideBar";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function TheHeader ({ inputSearch }) {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="relative bg-vintageWhite p-1.5 hidden w-full max-w-full md:flex flex-row items-center justify-between gap-x-5">
        {/* LOGO */}
        <div className="flex items-center">
          <a href="" className="flex flex-row gap-x-1.5 items-end">
            <img src={logoMicaClick} alt="MicaClick_Logo" className="w-8.5 h-8.5" />
            <h1 className="font-momoTrust text-2xl font-bold text-vintageGreen">MicaClick</h1>
          </a>
        </div>
        {/* FILTER ITEMS */}
        <div className="bg-white px-4 py-1 w-1/2 max-w-full flex flex-row items-center rounded-md">
          <Inputs id="inputSearch" type="text" value={inputSearch} placeholder="Search for products..." className="w-full p-1" icon={ <CiSearch className="text-2xl" /> } />
        </div>
        {/* BUTTONS USER & CART */}
        <div className="flex flex-row gap-x-5">
          <Buttons id="btnUserLog" type="button" onClick={ () => {} } icon={ <FaUser className="text-2xl text-vintageGray" /> } />
          <Buttons id="btnCart" type="button" onClick={ () => {} } icon={ <FaShoppingCart className="text-2xl text-vintageGreen" /> } />
        </div>
        {/* CART SIDEBAR */}
        <TheCartSideBar />
      </div>

      {/* MOBILE VIEW */}
      <div className="bg-vintageWhite p-1.5 relative md:hidden w-full max-w-full flex flex-row items-center justify-between gap-x-5">
        {/* BUTTON BURGER */}
        <Buttons id="btnBurder" type="button" onClick={ (openSideBar) => setOpenSideBar(prev => !prev) } 
        icon={ 
          openSideBar === false ?
            <RxHamburgerMenu />
            :
            <IoClose />
        } 
        className={`absolute z-20 text-3xl`}
        />

        {/* SIDE BAR */}
        <div
          className={`
            bg-vintageWhite rounded-r-xl shadow-[4px_0_10px_rgba(0,0,0,0.25)]
            absolute z-10 top-0 left-0 w-1/2 max-w-full min-h-screen
            transition-all duration-300 ease-in-out transform
            ${openSideBar ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
          `}
        >
        </div>  

        {/* LOGO */}
        <div className="m-auto flex items-center">
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