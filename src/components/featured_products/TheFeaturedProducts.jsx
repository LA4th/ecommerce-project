import React from "react";
import TheCard from "./TheCard";

export default function TheFeaturedProducts ({ itemsList, addCarts }) {

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Common Over-the-Counter Products</h1>
        <p className="text-vintageGray">Always read the label and consult a pharmacist if unsure.</p>
      </div>
      {/* CARD RENDER */}
      <TheCard itemList={ itemsList } addCart={ addCarts } />
    </>
  );
};