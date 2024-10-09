/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from "react";
import SvgMinus from "../SVG/SvgMinus";
import SvgPlus from "../SVG/SvgPlus";
import "./PassengerCounter.css";
import { PassengerEnding } from "/src/ExternalLogic/PassengerEnding.js";

export default function PassengerCounter({ defaultValue, userPassengerAmount, setUserPassengerAmount, setUserPassengerAmountText, ageGroup }) {
  const [countPassenger, setCountPassenger] = useState(defaultValue);

  useEffect(() => {
    // Подставляем правильные окончания для кол-во пассажиров
    PassengerEnding(userPassengerAmount, setUserPassengerAmountText);

    // Устанавливаем значение из sessionStorage в counter после удаления компонента из DOM (ComponenWillUnmount()) (костыль вместо кэширования)
    setCountPassenger(Number(sessionStorage.getItem(`Пассажиры ${ageGroup}`)))

    if (countPassenger <= defaultValue) {
      let btnDec = btnDecrement.current;
      btnDec.setAttribute("disabled", "");
    }
  }, []);

  
  const btnIncrement = useRef();
  const btnDecrement = useRef();


  // "Обновляем значение в sessionStorage, в зависимости от прожатой кнопки +-"
  function setSessionStoragePassengerValueDecr(ageGroup){
    sessionStorage.setItem(`Пассажиры ${ageGroup}`, countPassenger - 1)
    sessionStorage.setItem(`Всего пассажиров`, userPassengerAmount - 1)
  }
  // "Обновляем значение в sessionStorage, в зависимости от прожатой кнопки +-"
  function setSessionStoragePassengerValueIncr(ageGroup){
    sessionStorage.setItem(`Пассажиры ${ageGroup}`, countPassenger + 1)
    sessionStorage.setItem(`Всего пассажиров`, userPassengerAmount + 1)
  }

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
    setUserPassengerAmount((prev) => prev - 1);
    setCountPassenger((prev) => prev - 1);

    // sessionStorage.setItem("Passengers", userPassengerAmount - 1)
    setSessionStoragePassengerValueDecr(ageGroup);

    // Функция подставляющая правильное окончание к отображению "пассажиров"
    PassengerEnding(userPassengerAmount, setUserPassengerAmountText);
  }

  function handleIncrement() {
    if (countPassenger === 9) {
      let btnDec = btnDecrement.current;
      btnDec.removeAttribute("disabled");
    }
    setUserPassengerAmount((prev) => prev + 1);
    setCountPassenger((prev) => prev + 1);

    // sessionStorage.setItem("Passengers", userPassengerAmount + 1)
    setSessionStoragePassengerValueIncr(ageGroup);

    // Функция подставляющая правильное окончание к отображению "пассажиров"
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
          >
            <SvgMinus />
          </button>
        </div>

          {/* Условный рендер для получения значения из sessionStorage */}
        <div className="counter_number">
          {sessionStorage.getItem(`Пассажиры ${ageGroup}`) ? 
          <div className="counter_number">{sessionStorage.getItem(`Пассажиры ${ageGroup}`)}</div>
          : <div className="counter_number">{countPassenger}</div>}
        </div> 

        <div className="counter_increment">
          <button className="btn_increment" ref={btnIncrement} onClick={handleIncrement}>
            <SvgPlus />
          </button>
        </div>
      </div>
    </>
  );
}
