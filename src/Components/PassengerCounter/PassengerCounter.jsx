/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react";
import SvgMinus from "../SVG/SvgMinus";
import SvgPlus from "../SVG/SvgPlus";
import "./PassengerCounter.css";
import { PassengerEnding } from "/src/ExternalLogic/PassengerEnding.js";

export default function PassengerCounter({ defaultValue, userPassengerAmount, setUserPassengerAmount, setUserPassengerAmountText }) {
  const [countPassenger, setCountPassenger] = useState(defaultValue);

  useEffect(() => {
    PassengerEnding(userPassengerAmount, setUserPassengerAmountText);
    if (countPassenger <= defaultValue) {
      let btnDec = btnDecrement.current;
      btnDec.setAttribute("disabled", "");
    }
  });

  const btnIncrement = useRef();
  const btnDecrement = useRef();

  if (countPassenger === 9) {
    let btnInc = btnIncrement.current;
    btnInc.setAttribute("disabled", "");
  }

  if (countPassenger > defaultValue) {
    let btnDec = btnDecrement.current;
    btnDec.removeAttribute("disabled");
  }

  function handleDecrement() {
    if (countPassenger === defaultValue) {
      let btnDec = btnDecrement.current;
      btnDec.setAttribute("disabled", "");
      return 0;
    }

    if (countPassenger >= defaultValue && countPassenger <= 9) {
      let btnInc = btnIncrement.current;
      btnInc.removeAttribute("disabled");

      let btnDec = btnDecrement.current;
      btnDec.removeAttribute("disabled");
    }

    // if (userPassengerAmount == 1 || userPassengerAmount == 21) {
    //   setUserPassengerAmountText("пассажир");
    // }
    // if (userPassengerAmount >= 2 && userPassengerAmount <= 4) {
    //   setUserPassengerAmountText("пассажира");
    // }
    // if (userPassengerAmount >= 22 && userPassengerAmount <= 24) {
    //   setUserPassengerAmountText("пассажира");
    // } else {
    //   setUserPassengerAmountText("пассажиров");
    // }

    setUserPassengerAmount((prev) => prev - 1);
    setCountPassenger((prev) => prev - 1);
    PassengerEnding(userPassengerAmount, setUserPassengerAmountText);
  }

  function handleIncrement() {
    if (countPassenger === 9) {
      let btnDec = btnDecrement.current;
      btnDec.removeAttribute("disabled");
    }
    // if (userPassengerAmount == 1 || userPassengerAmount == 21) {
    //   setUserPassengerAmountText("пассажир");
    // }
    // if (userPassengerAmount >= 2 && userPassengerAmount <= 4) {
    //   setUserPassengerAmountText("пассажира");
    // }
    // if (userPassengerAmount >= 22 && userPassengerAmount <= 24) {
    //   setUserPassengerAmountText("пассажира");
    // } else {
    //   setUserPassengerAmountText("пассажиров");
    // }
    setUserPassengerAmount((prev) => prev + 1);
    setCountPassenger((prev) => prev + 1);
    PassengerEnding(userPassengerAmount, setUserPassengerAmountText);
  }

  return (
    <>
      <div className="counter_inner_wrapper">
        <div className="counter_decrement">
          <button
            className="btn_decrement"
            ref={btnDecrement}
            onClick={handleDecrement}
            // disabled
          >
            <SvgMinus />
          </button>
        </div>

        <div className="counter_number">{countPassenger}</div>

        <div className="counter_increment">
          <button className="btn_increment" ref={btnIncrement} onClick={handleIncrement}>
            <SvgPlus />
          </button>
        </div>
      </div>
    </>
  );
}
