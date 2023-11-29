import React from "react";

function Search({search,setSearch}) {

  function handleSearch(event) {
    return setSearch(event.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input value={search} onChange={handleSearch} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
