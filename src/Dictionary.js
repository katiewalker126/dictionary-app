import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word would you like to look up?</h1>
          <form className="search-form text-center" onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus="on"
              onChange={updateKeyword}
              defaultValue={props.defaultKeyword}
              className="search"
            ></input>
            <input
              type="submit"
              value="Search"
              className="search-button"
            ></input>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
  }
}
