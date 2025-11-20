import React from "react";

export default function AddCartItems ({ addCartItems }) {

  return (
    <>
      <ul>
        {
          addCartItems.map((itemsCartValue, itemsCartIndex) => {
            return (
              <li key={ itemsCartIndex }>
                <div>
                  <img src={ itemsCartValue.image } alt={ itemsCartValue.generic_name + "_img" } />
                  {/* ITEMS INFO & PRICE */}
                  <div>
                    <span>{ itemsCartValue.generic_name }</span>
                    <span>{ itemsCartValue.prices[0].brand }</span>
                    <span>{ itemsCartValue.prices.price }</span>
                  </div>
                  <div></div>
                </div>
              </li>
            );
          })
        }
      </ul>
    </>
  );
};