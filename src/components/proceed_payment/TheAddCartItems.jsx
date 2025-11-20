import React from "react";

export default function TheAddCartItems ({ addCartItems }) {

  return (
    <>
      {
        addCartItems.map((itemsValue, itemsIndex) => {
          return (
            <li key={ itemsIndex }>
              <div>
                <img src={ itemsValue.image } alt={ itemsValue.generic_name + "_img" } />
                {/* ITEM PRICE & INFO */}
                <div>

                </div>
                {/* BUTTON ADD NUMBER ITEMS */}
                <div>

                </div>
              </div>
            </li>
          );
        })
      }
    </>
  );
};