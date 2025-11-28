import React from "react";
import Inputs from "../ui/inputs";
import { CiSearch } from "react-icons/ci";

export default function TheSearchBar({ itemsSearch, setItemsSearch }) {
  return (
    <Inputs
      id="inputSearch"
      type="text"
      value={itemsSearch}
      onChange={(e) => setItemsSearch(e.target.value)}
      placeholder="Search for products..."
      className="w-full p-1"
      icon={<CiSearch className="text-2xl" />}
    />
  );
}
