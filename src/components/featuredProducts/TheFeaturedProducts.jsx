import React from "react";
import TheCard from "./TheCard";

export default function TheFeaturedProducts ({ itemsList }) {

  return (
    <>
      <div>
        <h1>Common Over-the-Counter Products</h1>
        <p>Always read the label and consult a pharmacist if unsure.</p>
      </div>
      {/* CARD RENDER */}

      {/* CARD CONTAINER */}
      <TheCard itemList={ itemsList } />
    </>
  );
};