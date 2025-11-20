import React from "react";
import Buttons from "../ui/Buttons";
import TheAddCartItems from "./TheAddCartItems";

export default function ThePaymentMethod ({ addItem }) {


  return (
    <>
      <header>
        <Buttons />
        <h1></h1>
        <Buttons />
      </header>
      {/* RENDER ADD ITEMS */}
      <TheAddCartItems addCartItems={ addItem } />
    </>
  );
};