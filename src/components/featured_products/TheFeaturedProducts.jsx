import React from "react";
import Card from "./Card";

export default function TheFeaturedProducts ({ itemsList, addCarts }) {

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Common Over-the-Counter Products</h1>
        <p className="text-vintageGray">Always read the label and consult a pharmacist if unsure.</p>
      </div>
      {/* CARD RENDER */}
      <Card itemList={ itemsList } addCart={ addCarts } />
    </>
  );
};