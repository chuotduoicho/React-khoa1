import React, { Component } from "react";
import ContentB1 from "./ContentB1";
import FooterB1 from "./FooterB1";
import HeaderB1 from "./HeaderB1";
import Navigation from "./Navigation";

export default class HomeB1 extends Component {
  render() {
    let style = {
      padding: 0,
    };
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12" style={style}>
            <HeaderB1 />
          </div>
        </div>
        <div className="row">
          <div className="col-4" style={style}>
            <Navigation />
          </div>
          <div className="col-8" style={style}>
            <ContentB1 />
          </div>
        </div>
        <div className="row">
          <div className="col-12" style={style}>
            <FooterB1 />
          </div>
        </div>
      </div>
    );
  }
}
