import axios from "axios";
import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="search-form text-center" onSubmit={search}>
        <input type="search" onChange={updateKeyword}></input>
        <input type="submit" value="Search" className="search-button"></input>
      </form>
    </div>
  );
}
