import React from "react";

function Button({ label, onClick }) {
  return (
    <div>
      <button className="bg-black border border-white text-white rounded px-4 py-2 hover:bg-white hover:text-black hover:border-black  focus:outline-none" onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

export default Button;
