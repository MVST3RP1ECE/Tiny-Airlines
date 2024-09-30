import React from "react";
import SvgAirplane from "../SVG/SvgAirplane";
import { Link } from "react-router-dom";

export default function ButtonToMain() {
  return (
    <>
      <Link to="/">
        <button className="btn_to_main">
          <div className="inner_wrapper">
            <div className="text">На главную</div>
            <div className="svg_airplane">
              <SvgAirplane />
            </div>
          </div>
        </button>
      </Link>
    </>
  );
}
