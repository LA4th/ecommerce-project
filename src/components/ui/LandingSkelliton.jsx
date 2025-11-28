import React from "react";

export default function LandingSkelliton() {
  const numList = Array.from({ length: 3 });
  return (
    <>
      <ul className="w-full grid grid-cols-2 md:grid-cols-4">
        {numList.map((__, listIndex) => {
          return (
            <li
              key={listIndex}
              className="p-1 w-full min-h-80 flex items-center"
            >
              <div className="bg-gray-200 w-full h-full animate-pulse"></div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
