import React from "react";

export default function Inputs ({ id, type, value, onChange, placeholder, className, icon }) {

  return (
    <>
      { icon }
      <input id={ id } type={ type } value={ value } onChange={ onChange } placeholder={ placeholder } className={ className } />
    </>
  );
};