import React, { useState, useEffect } from "react";
import TheHeader from "../components/header/TheHeader";
import TheFeaturedProducts from "../components/featured_products/TheFeaturedProducts";
import NotifMessage from "../components/ui/NotifMessage";

export default function PageLanding({
  itemsList,
  cartItems,
  setCartItems,
  itemsSearch,
  setItemsSearch,
}) {
  const [showNotif, setShowNotif] = useState(false);
  const triggerNotif = () => {
    setShowNotif(true);
    setTimeout(() => {
      setShowNotif(false);
    }, 1200);
  };

  return (
    <div className="absolute">
      <TheHeader itemsSearch={itemsSearch} setItemsSearch={setItemsSearch} />
      <NotifMessage
        containerClassName={`fixed z-10 w-1/2 h-10 flex items-center justify-center rounded-md bg-lightGreen transition-all duration-300 ${
          showNotif
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-5 pointer-events-none"
        }`}
        message="Item Added!"
        messageClassName="font-bold text-vintageBlack"
      />
      {itemsList && (
        <TheFeaturedProducts
          itemsList={itemsList}
          cartItems={cartItems}
          setCartItems={setCartItems}
          triggerNotif={triggerNotif}
          itemsSearch={itemsSearch}
          setItemsSearch={setItemsSearch}
        />
      )}
    </div>
  );
}
