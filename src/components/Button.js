import React from "react";

export default function Button({children, ext}) {
  return (
    <button
      className={`bg-color1 rounded-full px-6 py-3 font-bold text-white ${ext} hover:opacity-80`}
    >
      {children}
    </button>
  );
}
