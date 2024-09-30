/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SvgAirplane from "../SVG/SvgAirplane";
import SvgHotel from "../SVG/SvgHotel";

export default function Nav({ page }) {
  const [toggledTourClassAirplane, setToggledTourClassAirplane] =
    useState(true);
  const [toggledTourClassHotel, setToggledTourClassHotel] = useState(false);

  // useEffect для переключения заднего цвета у "слайдера", на белый (Отели)
  useEffect(() => {
    if (page == "/hotels") {
      setToggledTourClassHotel(!toggledTourClassHotel);
      setToggledTourClassAirplane(!toggledTourClassAirplane);
    }
  }, []);

  const toggleClickHandlerAir = (e) => {
    // e.preventDefault();
    if (e.currentTarget.className === "tour_link toggled--tour") {
      return 0;
    }
    setToggledTourClassAirplane(!toggledTourClassAirplane);
    setToggledTourClassHotel(!toggledTourClassHotel);
  };

  // Функция переключения на страницу Отели.
  // Function for switch to page Hotels
  // class: toggled--tour

  const toggleClickHandlerHotel = (e) => {
    // e.preventDefault();
    if (e.currentTarget.className === "tour_link toggled--tour") {
      return 0;
    }
    setToggledTourClassAirplane(!toggledTourClassAirplane);
    setToggledTourClassHotel(!toggledTourClassHotel);
  };

  return (
    <>
      <div className="nav_tour_wrapper">
        <nav className="nav_main_section">
          <ul className="list_main_section">
            <li className="list_item_tour">
              <Link
                to="/"
                className={`tour_link ${
                  toggledTourClassAirplane ? "toggled--tour" : ""
                }`}
                // onClick={toggleClickHandler}
                onClick={toggleClickHandlerAir}
              >
                <div className="tour_svg">
                  <SvgAirplane />
                </div>
                <div className="tour_plaintext">Авиабилеты</div>
              </Link>
            </li>
            <li className="list_item_tour">
              <Link
                to="/hotels"
                className={`tour_link ${
                  toggledTourClassHotel ? "toggled--tour" : ""
                }`}
                // onClick={toggleClickHandler}
                onClick={toggleClickHandlerHotel}
              >
                <div className="tour_svg">
                  <SvgHotel />
                </div>
                <div className="tour_plaintext">Отели</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
