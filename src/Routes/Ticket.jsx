import React from "react";
import App from "../App";
import { Link } from "react-router-dom";
import "./RoutesStyles/Ticket.css";
import Header from "../Components/Header/Header";
import SvgAirplane from "../Components/SVG/SvgAirplane";
import ButtonToMain from "../Components/Button/ButtonToMain";

export default function Ticket() {
  return (
    <>
      <Header />
      <h1>Билеты!</h1>
      <ButtonToMain />
    </>
  );
}
