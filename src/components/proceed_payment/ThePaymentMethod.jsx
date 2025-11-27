import React from "react";
import MobileViewPaymentMethod from "./MobileViewPaymentMethod";

export default function ThePaymentMethod({ cartItems, setCartItems }) {
  return (
    <>
      {/* MOBILE VIEW */}
      <div className="flex flex-col gap-y-5">
        <MobileViewPaymentMethod
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>
      {/* DESKTOP VIEW */}
      <div></div>
    </>
  );
}
