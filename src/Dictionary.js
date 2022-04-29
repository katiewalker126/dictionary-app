import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for the definition of ${keyword}`);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="search-form text-center" onSubmit={search}>
        <input type="search" onChange={updateKeyword}></input>
        <input type="submit" value="Search" classNam="search-button"></input>
      </form>
    </div>
  );
}
