import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photos, index) {
            console.log(photos);
            return (
              <div className="col-4" key={index}>
                <a
                  href={photos.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={photos.src.landscape}
                    className="img-fluid"
                    alt={photos.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
