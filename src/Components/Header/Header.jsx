import React from "react";
import ReactCountryDropdown from "react-country-dropdown";
import Button from "../Button/ButtonSVG";
import SvgCurrency from "../SVG/SvgCurrency";
import SvgProfile from "../SVG/SvgProfile";
import SvgSupport from "../SVG/SvgSupport";
import SvgAviaSales from "../SVG/SvgAviaSales";
import SvgTinyAirlines from "../SVG/SvgTinyAirlines";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="navBar">
      <div className="navBar_wrapper">
        <div className="navBar_container">
          <a
            href="https://www.aviasales.ru"
            // href="/"
            target="_blank"
            className="origin_link"
          >
            <span className="svg_header_wrapper">
              <SvgAviaSales />
              <SvgTinyAirlines />
            </span>
          </a>
          <div className="nav_separator"></div>
          <div className="menu">
            <div className="menu_wrapper">
              <span className="button_wrapper profile_wrapper">
                <Button text="Профиль" icon={<SvgProfile />} />
              </span>
              <Link to="/support">
                <span className="button_wrapper support_wrapper">
                  <Button text="Поддержка" icon={<SvgSupport />} />
                </span>
              </Link>
              <span className="button_wrapper currency_wrapper">
                <Button text="RUB" icon={<SvgCurrency />} />
                {/* <ReactCountryDropdown defaultCountry='RU' onSelect={(e)=> {console.log(e)}}/> 
                TODO Сделать компонент select для выбора валюты оплаты*/}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
