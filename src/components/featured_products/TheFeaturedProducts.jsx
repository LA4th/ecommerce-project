import React, { useState, useEffect, use } from "react";
import Card from "./Card";
import LandingSkelliton from "../ui/skelliton/LandingSkelliton";

export default function TheFeaturedProducts({
  itemsList,
  cartItems,
  setCartItems,
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Common Over-the-Counter Products</h1>
        <p className="text-vintageGray">
          Always read the label and consult a pharmacist if unsure.
        </p>
      </div>
      {/* CARD RENDER */}
      {loading ? (
        <LandingSkelliton />
      ) : (
        <Card
          itemsList={itemsList}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}
    </>
  );
}
