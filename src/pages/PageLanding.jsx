import React from "react";
import TheHeader from "../components/header/TheHeader";
import TheFeaturedProducts from "../components/featured_products/TheFeaturedProducts";
import LandingSkelliton from "../components/skelliton/LandingSkelliton";

export default function PageLanding({ itemsList, cartItems, setCartItems }) {
  return (
    <div>
      <TheHeader />
      {itemsList && (
        <TheFeaturedProducts
          itemsList={itemsList}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      )}
      <LandingSkelliton />
    </div>
  );
}
