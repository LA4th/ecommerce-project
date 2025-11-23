import React from "react";

export default function LandingSkelliton() {
  const numList = 5;
  return (
    <>
      <ul className="grid grid-cols-2">
        {numList.map((_, listIndex) => {
          return (
            <li key={listIndex} className="">
              <div className="min-h-80 w-full max-w-full bg-gray-500 animate-pulse"></div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
