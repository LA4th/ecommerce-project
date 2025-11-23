import React from "react";
import MobileViewPaymentMethod from "./MobileViewPaymentMethod";

export default function ThePaymentMethod({ cartItems }) {
  return (
    <>
      {/* MOBILE VIEW */}
      <div className="flex flex-col gap-y-5">
        <MobileViewPaymentMethod cartItems={cartItems} />
      </div>
      {/* DESKTOP VIEW */}
      <div></div>
    </>
  );
}
