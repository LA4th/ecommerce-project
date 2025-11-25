import React from "react";
import ThePaymentMethod from "../components/proceed_payment/ThePaymentMethod.jsx";

export default function PageProceedPayment({ cartItems }) {
  return (
    <div>
      <ThePaymentMethod cartItems={cartItems} />
    </div>
  );
}
