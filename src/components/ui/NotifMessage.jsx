import React from "react";

export default function NotifMessage({
  containerClassName,
  message,
  messageClassName,
}) {
  return (
    <>
      <div className={containerClassName}>
        <p className={messageClassName}>{message}</p>
      </div>
    </>
  );
}
