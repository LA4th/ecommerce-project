import React from "react";
import Buttons from "../ui/Buttons";
import { FaShoppingCart } from "react-icons/fa";

export default function Card({ itemsList, cartItems, setCartItems }) {
  const handleCart = (items) => {
    const existAddItems = cartItems.find((cartItem) => {
      return cartItem.id === items.id;
    });

    if (existAddItems) {
      const updateCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === items.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        } else {
          return cartItem;
        }
      });
      setCartItems(updateCartItems);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...items,
          quantity: 1,
          setBrand: items.prices[0],
        },
      ]);
    }
  };

  return (
    <>
      {itemsList.medicines_by_symptom.map((groupItem) => {
        return (
          <div
            key={groupItem.id}
            className="mt-5 w-full max-w-full flex flex-col gap-y-5"
          >
            <h1 className="text-2xl font-bold">{groupItem.symptom}</h1>
            <ul className="w-full grid grid-cols-2 md:grid-cols-4">
              {groupItem.medicines.map((singleItem) => {
                return (
                  <li
                    key={singleItem.id}
                    className="p-1 w-full min-h-80 flex items-center"
                  >
                    <div className="shadow-md w-full h-full flex flex-col">
                      <img
                        src={singleItem.image}
                        alt={singleItem.generic_name + "_img"}
                        className="w-full min-h-50 object-cover"
                      />
                      <div className="px-2 w-full h-full flex flex-col">
                        <a href="" className="text-vintageGray line-clamp-2">
                          {singleItem.generic_name}
                        </a>
                        <Buttons
                          id="btnAddCart"
                          type="button"
                          onClick={() => handleCart(singleItem)}
                          className="bg-vintageGreen text-white p-1.5 rounded-md mt-auto mb-3 flex flex-row items-center gap-x-1.5 justify-center"
                          btnName="Add to Cart"
                          icon={<FaShoppingCart />}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}
