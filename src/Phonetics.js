import React from "react";

export default function Phonetics(props) {
  console.log(props);
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-volume-high"></i>
      </a>

      <br />
      {props.phonetics.text}
    </div>
  );
}
