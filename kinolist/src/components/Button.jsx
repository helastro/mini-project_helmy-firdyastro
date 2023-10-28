import React from "react";

function Button({ label, onClick }) {
  return (
    <div>
      <button className="bg-white border border-white text-black rounded px-4 py-2 hover:bg-black hover:text-white hover:border-white transition duration-250 ease-in focus:outline-none font-medium" onClick={onClick}>
        {label}
      </button>
    </div>
  );
}

export default Button;
