import React from "react";
import ThePaymentMethod from "../components/proceed_payment/ThePaymentMethod.jsx";

export default function PageProceedPayment({ cartItems, setCartItems }) {
  return (
    <div className="w-full max-w-full min-h-screen">
      <ThePaymentMethod cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}
