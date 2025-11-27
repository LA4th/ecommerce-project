import React from "react";
import Buttons from "../ui/Buttons";
import AddCartItems from "./AddCartItems";
import OrderSummary from "./OrderSummary";
import NoItems from "/src/components/ui/NoItems";
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MobileViewPaymentMethod({ cartItems, setCartItems }) {
  return (
    <>
      <header className="flex flex-row items-center justify-between">
        <Link to="/" className="text-3xl">
          <FaArrowLeft />
        </Link>
        <h1 className="text-2xl font-bold">Review Your Order</h1>
        <Buttons
          id="btnDeleteAction"
          type="button"
          onClick={() => {}}
          className="text-3xl"
          icon={<FaRegTrashAlt />}
        />
      </header>
      {!cartItems || cartItems.length === 0 ? (
        <NoItems />
      ) : (
        <>
          <AddCartItems cartItems={cartItems} setCartItems={setCartItems} />
          <OrderSummary cartItems={cartItems} />
          <div>
            <hr className="w-full border-gray-400" />
            <Buttons
              id=""
              type="submit"
              onClick={() => {}}
              className=""
              btnName="Proceed to Payment"
            />
          </div>
        </>
      )}
    </>
  );
}
