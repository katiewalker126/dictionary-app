import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <ReactAudioPlayer src={props.phonetics.audio} controls />
      <a
        className="phonetics-audio"
        href={props.phonetics.audio}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-solid fa-volume-high"></i>
      </a>
      <span className="phonetics-text">{props.phonetics.text}</span>
    </div>
  );
}
