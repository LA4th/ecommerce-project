import React from "react";
import Inputs from "../ui/inputs";
import { CiSearch } from "react-icons/ci";

export default function TheSearchBar ({search, setSearch}) {

  return (
    <Inputs id="inputSearch" type="text" value={ search } onChange={ (e) => setSearch(e.target.value) } placeholder="Search for products..." className="w-full p-1" icon={ <CiSearch className="text-2xl" /> } />
  );
};