import React from "react";
import LandingSkelliton from "../components/ui/LandingSkelliton";
import NoItem from "../components/ui/NoItems";
import NotifMessage from "../components/ui/NotifMessage";

export default function PageDevelop() {
  return (
    <>
      <LandingSkelliton />
      <PaymentSkelliton />
      <NoItem />
      <NotifMessage />
    </>
  );
}
