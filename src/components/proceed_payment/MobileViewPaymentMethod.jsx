import React, { useState } from "react";
import Buttons from "../ui/Buttons";
import AddCartItems from "./AddCartItems";
import OrderSummary from "./OrderSummary";
import NoItems from "/src/components/ui/NoItems";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function MobileViewPaymentMethod({ cartItems, setCartItems }) {
  const [showDelete, setShowDelete] = useState(false);
  const handeleToggleDelete = () => {
    setShowDelete((prev) => !prev);
  };
  return (
    <>
      <header className="w-full border-b border-gray-400 pb-1.5 max-w-full flex flex-row items-center justify-between">
        <Link to="/" className="text-3xl">
          <FaArrowLeft />
        </Link>
        <h1 className="text-2xl font-bold">Review Your Order</h1>
        {!showDelete ? (
          <Buttons
            id="btnDeleteAction"
            type="button"
            onClick={handeleToggleDelete}
            className="w-1/6 text-center"
            btnName="Delete"
          />
        ) : (
          <Buttons
            id="btnDoneAction"
            type="button"
            onClick={handeleToggleDelete}
            className="w-1/6 text-center"
            btnName="Done"
          />
        )}
      </header>
      {!cartItems || cartItems.length === 0 ? (
        <NoItems />
      ) : (
        <>
          <AddCartItems
            cartItems={cartItems}
            setCartItems={setCartItems}
            showDelete={showDelete}
          />
          <OrderSummary cartItems={cartItems} />
          <div className="mt-auto flex flex-col items-center justify-center gap-y-5">
            <hr className="w-full border-gray-400" />
            <Buttons
              id=""
              type="submit"
              onClick={() => {}}
              className="w-full py-3 rounded-md bg-vintageGreen text-vintageWhite"
              btnName="Proceed to Payment"
            />
          </div>
        </>
      )}
    </>
  );
}
