/* eslint-disable react/prop-types */
import React from "react";
import MainSection from "../Components/MainSection/MainSection";
import Nav from "../Components/Nav/Nav";
import Header from "../Components/Header/Header";

export default function Hotels({ text1, text2, text3 }) {
  return (
    <>
      <Header />
      <div className="section_wrapper">
        <section className="main_section">
          <div className="main_section_inner-wrapper">
            <div className="h1_wrapper">
              <h1>
                {" "}
                Тут {text1} {text2} {text3}
              </h1>
            </div>
            <Nav page="/hotels" />
          </div>
        </section>
      </div>
    </>
  );
}
