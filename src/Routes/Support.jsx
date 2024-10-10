import React from "react";
import Header from "../Components/Header/Header";
import ButtonToMain from "../Components/Button/ButtonToMain";
import "./RoutesStyles/Support.css";

export default function Support() {
  return (
    <>
      <Header />
      <section className="support">
        <h1> Мы вас поддерживаем!</h1>
      </section>
      <ButtonToMain />
    </>
  );
}
