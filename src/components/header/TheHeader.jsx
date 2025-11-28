import React, { useState } from "react";
import DesktopViewHeader from "./DesktopViewHeader";
import MobileViewHeader from "./MobileViewHeader";

export default function TheHeader({ itemsSearch, setItemsSearch }) {
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
      {/* DESKTOP VIEW */}
      <div className="relative bg-vintageWhite border-b border-gray-300 p-1.5 hidden w-full max-w-full md:flex flex-row items-center justify-between gap-x-5">
        <DesktopViewHeader />
      </div>

      {/* MOBILE VIEW */}
      <div className="bg-vintageWhite border-b border-gray-300 p-1.5 relative md:hidden w-full max-w-full flex flex-col items-center justify-between gap-y-5">
        <MobileViewHeader
          openSideBar={openSideBar}
          setOpenSideBar={setOpenSideBar}
          itemsSearch={itemsSearch}
          setItemsSearch={setItemsSearch}
        />
      </div>
    </>
  );
}
