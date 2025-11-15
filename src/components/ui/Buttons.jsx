import React from "react";

export default function Buttons ({ id, type, onClick, btnName, className, icon }) {

  return (
    <>
      <button id={ id } type={ type } onClick={ onClick } className={ className }>{ icon }{ btnName }</button>
    </>
  );
};