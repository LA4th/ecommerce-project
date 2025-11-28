import React, { useState } from "react";
import Buttons from "../ui/Buttons.jsx";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

export default function AddCartItems({ cartItems, setCartItems, showDelete }) {
  const quantityIncrement = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCartItems(updated);
  };

  const quantityDecrement = (id) => {
    const updated = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      // auto-remove kapag quantity = 0
      .filter((item) => item.quantity > 0);

    setCartItems(updated);
  };

  const deleteItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
  };
  return (
    <>
      <ul className="flex flex-col gap-y-1.5">
        {cartItems.map((itemsCart) => {
          return (
            <li key={itemsCart.id}>
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
                {!showDelete ? (
                  <>
                    {/* BUTTONS */}
                    <div className="flex flex-row items-center">
                      <Buttons
                        id="btnDecrement"
                        type="button"
                        onClick={() => {
                          return quantityDecrement(itemsCart.id);
                        }}
                        className="text-4xl"
                        icon={<CiCircleMinus />}
                      />
                      <span className="w-8 text-center font-bold">
                        {itemsCart.quantity}
                      </span>
                      <Buttons
                        id="btnIncement"
                        type="button"
                        onClick={() => {
                          return quantityIncrement(itemsCart.id);
                        }}
                        className="text-4xl"
                        icon={<CiCirclePlus />}
                      />
                    </div>
                  </>
                ) : (
                  <Buttons
                    id="btnDeleteItem"
                    type="remove"
                    onClick={() => {
                      return deleteItem(itemsCart.id);
                    }}
                    className="text-3xl p-1 border-3 border-red-400 rounded-md flex items-center justify-center text-red-400"
                    icon={<FaRegTrashAlt />}
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
