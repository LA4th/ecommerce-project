import React from "react";
import LeafCry from "/src/assets/LeafCry.svg";

export default function NoItem() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <img
          src={LeafCry}
          alt="LeafCry_image"
          className="w-20 h-20 object-fill"
        />
        <span className="text-2xl text-vintageBlack">Sorry, No Items!</span>
      </div>
    </>
  );
}
