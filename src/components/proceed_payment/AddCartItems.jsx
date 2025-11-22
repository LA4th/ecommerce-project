import React from "react";
import Buttons from "../ui/Buttons.jsx";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

export default function AddCartItems() {
  return (
    <>
      <ul className="flex flex-col gap-y-1.5">
        {addCartItems.map((itemsCart) => {
          return (
            <li key={itemsCart.objectID}>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row">
                  <img
                    src={itemsCart.image}
                    alt={itemsCart.generic_name + "_img"}
                    className="w-19 h-19 object-cover rounded-md"
                  />
                  {/* ITEMS INFO & PRICE */}
                  <div className="flex flex-col items-start w-50 px-2.5">
                    <span className="w-full max-w-full font-bold">
                      {itemsCart.generic_name}
                    </span>
                    <span className="w-full max-w-full text-vintageGray">
                      {itemsCart.prices[0].brand}
                    </span>
                    <span className="w-full max-w-full font-bold">
                      ₱{itemsCart.prices[0].price}
                    </span>
                  </div>
                </div>
                {/* BUTTONS */}
                <div className="flex flex-row items-center">
                  <Buttons
                    id="btnDecrement"
                    type="button"
                    onClick={() => {}}
                    className="text-4xl"
                    icon={<CiCircleMinus />}
                  />
                  <span className="w-8 text-center font-bold">1</span>
                  <Buttons
                    id="btnIncement"
                    type="button"
                    onClick={() => {}}
                    className="text-4xl"
                    icon={<CiCirclePlus />}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
