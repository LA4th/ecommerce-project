import React from "react";
import Buttons from "../ui/Buttons";
import AddCartItems from "./AddCartItems";
import OrderSummary from "./OrderSummary";
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

export default function MobileViewPaymentMethod({ cartItems }) {
  return (
    <>
      <header className="flex flex-row items-center justify-between">
        <a href="" className="text-3xl">
          <FaArrowLeft />
        </a>
        <h1 className="text-2xl font-bold">Review Your Order</h1>
        <Buttons
          id="btnDeleteAction"
          type="button"
          onClick={() => {}}
          className="text-3xl"
          icon={<FaRegTrashAlt />}
        />
      </header>
      <AddCartItems cartItems={cartItems} />
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
  );
}
