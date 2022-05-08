import React from "react";
import Phonetics from "./Phonetics";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics
            .filter(function (phonetics) {
              return phonetics.audio;
            })
            .map(function (phonetics, index) {
              if (index <= 0) {
                return (
                  <div key={index}>
                    <Phonetics phonetics={phonetics} />
                  </div>
                );
              } else {
                return null;
              }
            })}
        </section>
        {props.results.meanings.map(function (meanings, index) {
          return (
            <section key={index}>
              <Meanings meanings={meanings} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
