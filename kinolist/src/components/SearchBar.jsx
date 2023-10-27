import React from "react";

function SearchBar(props) {
  return (
    <div className="flex justify-center items-center">
      <input
        className="w-1/3 border-2 border-transparent bg-transparent border-b-white px-4 py-2 my-4 focus:outline-none text-center placeholder:text-gray-500"
        placeholder="Search..."
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
      ></input>
    </div>
  );
}

export default SearchBar;
