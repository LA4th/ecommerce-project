import React from "react";

export default function Inputs ({ id, type, value, placeholder, className, icon }) {

  return (
    <>
      { icon }
      <input id={ id } type={ type } value={ value } placeholder={ placeholder } className={ className } />
    </>
  );
};