import React from "react";
import ThePaymentMethod from "../components/proceed_payment/ThePaymentMethod.jsx";

export default function PageProceedPayment({ cartItems, setCartItems }) {
  return (
    <div>
      <ThePaymentMethod cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}
