import React, { Component } from "react";

export default class ItemB2 extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card">
          {/* Card image */}
          <div className="view overlay">
            <img
              className="card-img-top"
              src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp"
              alt="Card image cap"
            />
            <a href="#!">
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          {/* Card content */}
          <div className="card-body">
            {/* Title */}
            <h4 className="card-title">Card title</h4>
            {/* Text */}
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* Button */}
            <a href="#" className="btn btn-primary">
              Button
            </a>
          </div>
        </div>
      </div>
    );
  }
}
