import React from "react";
import Buttons from "../ui/Buttons";

export default function TheCard ({ itemList }) {

  return (
    <>
      {
        itemList.medicines_by_symptom.map((groupItem, groupIndex) => {
          return (
            <div key={groupIndex} className="mt-5 w-full max-w-full flex flex-col gap-y-5">
              <h1 className="text-2xl font-bold">{groupItem.symptom}</h1>
              <ul className="w-full grid grid-cols-4">
                {
                  groupItem.medicines.map((singleItem, singleIndex) => {
                    return (
                      <li key={singleIndex} className="p-1 w-full min-h-80 flex items-center">
                        <div className="shadow-md w-full h-full flex flex-col">
                          <img src={singleItem.image} alt={singleItem.generic_name + "_img"} className="w-full min-h-50 object-cover" />
                          <div className="px-1 w-full h-full flex flex-col">
                            <a href="" className="line-clamp-2">{singleItem.generic_name}</a>
                            <Buttons id="btnAddCart" type="button" onClick={() => {}} className="bg-vintageGreen text-white p-1.5 rounded-md mt-auto mb-3" btnName="Add to Cart"  />
                          </div>
                        </div>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          );
        })
      }
    </>
  );
};