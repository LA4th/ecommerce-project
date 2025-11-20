import React from "react";
import Buttons from "../ui/Buttons";
import AddCartItems from "./AddCartItems";
import { FaArrowLeft } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";

export default function MobileViewPaymentMethod ({ addCartItems }) {

  return (
    <>
      <header className="flex flex-row items-center justify-between">
        <a href="" className="text-3xl"><FaArrowLeft /></a>
        <h1 className="text-2xl font-bold">Review Your Order</h1>
        <Buttons id="btnDeleteAction" type="button" onClick={ () => {} } className="text-3xl" icon={ <FaRegTrashAlt /> } />
      </header>
      <AddCartItems addCartItems={ addCartItems } />
    </>
  );
};