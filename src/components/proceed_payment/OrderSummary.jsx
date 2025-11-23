import React from "react";

export default function OrderSummary({ cartItems }) {
  const totalPriceItems = () => {
    return cartItems.reduce((accumulator, item) => {
      const findBrand = item.prices.find(
        (itemPrice) => itemPrice.brand === item.setBrand.brand
      );
      return accumulator + findBrand.price * item.quantity;
    }, 0);
  };
  const shippingPrice = 50.0;
  const vatRate = 0.12;
  const subtotal = totalPriceItems();
  const vat = subtotal * vatRate;

  const totalPayment = subtotal + vat + shippingPrice;
  return (
    <>
      <h1 className="text-2xl font-bold">Order Summary</h1>
      <div className="flex flex-row justify-between">
        <span className="text-vintageGray">Subtotal</span>
        <span className="text-vintageGray font-bold">₱{totalPriceItems()}</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-vintageGray">Shipping</span>
        <span className="text-vintageGray font-bold">₱{shippingPrice}</span>
      </div>
      <div className="flex flex-row justify-between">
        <span className="text-vintageGray">Vat</span>
        <span className="text-vintageGray font-bold">12%</span>
      </div>
      <hr className="w-full border-gray-400" />
      <div className="flex flex-row justify-between">
        <span className="text-2xl font-bold">Total</span>
        <span className="text-2xl font-bold">₱{totalPayment}</span>
      </div>
    </>
  );
}
