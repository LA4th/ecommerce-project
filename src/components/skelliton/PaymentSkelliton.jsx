import React from "react";

export default function PaymentSkelliton() {
  const numList = Array.from({ length: 3 });
  return (
    <ul className="w-full max-w-full">
      {numList.map((__, listIndex) => {
        return (
          <li key={listIndex} className="mb-1">
            <div className="bg-vintageGray h-20 w-full animate-pulse"></div>
          </li>
        );
      })}
    </ul>
  );
}
