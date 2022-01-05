import React, { Component } from "react";
import BannerB2 from "./BannerB2";
import ItemB2 from "./ItemB2";

export default class BodyB2 extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <BannerB2 />
        </div>
        <div className="row">
          <ItemB2 />
          <ItemB2 />
          <ItemB2 />
        </div>
      </div>
    );
  }
}
