import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import FooterCompponent from "./FooterCompponent";
import BodyComponent from "./Body/BodyComponent";

export default class BaiTapThucHanhLayoutComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <BodyComponent />
        <FooterCompponent />
      </div>
    );
  }
}
