import React from "react";
import Buttons from "../ui/Buttons";
import MobileViewPaymentMethod from "./MobileViewPaymentMethod";

export default function ThePaymentMethod ({ addCartItems }) {


  return (
    <>
      {/* MOBILE VIEW */}
      <div>
        <MobileViewPaymentMethod addCartItems={ addCartItems } />
      </div>
      {/* DESKTOP VIEW */}
      <div>

      </div>
    </>
  );
};