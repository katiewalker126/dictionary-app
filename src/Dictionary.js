import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
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
      <Results results={results} />
    </div>
  );
}
