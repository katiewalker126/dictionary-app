import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a
        className="phonetics-audio"
        href={props.phonetics.audio}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-solid fa-volume-high"></i>
      </a>
      <span class="phonetics-text">{props.phonetics.text}</span>
    </div>
  );
}
