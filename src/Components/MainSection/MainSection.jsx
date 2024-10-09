/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
import "./MainSection.css";
import SvgAirplane from "../SVG/SvgAirplane";
import SvgHotel from "../SVG/SvgHotel";
import Calendar from "react-calendar";
import SvgCalendar from "../SVG/SvgCalendar";
import SvgPassenger from "../SVG/SvgPassenger";
import {
  EngDayNumsToWeekdays,
  EngMonthNumsToMonthNames,
  RuDayNumsToWeekdays,
  RuMonthNumsToMonthNames,
} from "/src/ExternalLogic/DateConverter.js";
import TypePassenger from "../TypePassenger/TypePassenger";
import TypeClass from "../TypeClass/TypeClass";
import TypePassengerBabies from "../TypePassenger/TypePassengerBabies";
import TypePassengerKids from "../TypePassenger/TypePassengerKids";
import TypePassengerAdults from "../TypePassenger/TypePassengerAdults";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

export default function MainSection({ text1, text2 }) {

  useEffect(()=> {
    return(
      sessionStorage.clear(),
      sessionStorage.setItem("Пассажиры Взрослые", 1),
      sessionStorage.setItem("Класс", "Эконом")
    )
  }, [])

  // Состояниее для переключения текущей страницы (Билеты/Отели). !На данный момент существует только 1 страница (Авиабилеты)
  // State for switch current page (Airtickets/Hotels). !At this time working only 1 page (Airtickets)
  const [toggledTourClassAirplane, setToggledTourClassAirplane] =
    useState(true);
  const [toggledTourClassHotel, setToggledTourClassHotel] = useState(false);

  //

  // Состояние для добавления css класса к прожатой кнопке выбора даты.
  // State for add css class to pressed date button
  const [toggledCalendarFromActiveClass, setToggledCalendarFromActiveClass] =
    useState(false);
  const [toggledCalendarToActiveClass, setToggledCalendarToActiveClass] =
    useState(false);

  const [toggledPassengerClass, setToggledPassengerClass] = useState(false);

  const [userTravelFrom, setUserTravelFrom] = useState("");
  const [userTravelTo, setUserTravelTo] = useState("");

  // Состояния для отображения выбранных дат пользователя.
  // States for display chosen user dates.
  const [userDateDisplayFrom, setUserDateDisplayFrom] = useState("Когда");
  const [userDateDisplayTo, setUserDateDisplayTo] = useState("Обратно");

  // Состояние отображения календаря. Если "true" -> появляется <div> с календарём, иначе не появляется ¯\_(ツ)_/¯
  // State for calendar display. If true -> displays <div> with calendar, else display nothing ¯\_(ツ)_/¯
  // "..DateFrom" сответствует кнопке (userDateDisplayFrom) с состоянием "Когда"
  // "..DateTo" соответствует кнопке (userDateDisplayTo) с состояниекм "Обратно"
  const [userDateFromFocus, setUserDateFromFocus] = useState(false);
  const [userDateToFocus, setUserDateToFocus] = useState(false);

  // 211ст
  const [userPassengerAmount, setUserPassengerAmount] = useState(1);
  const [userPassengerAmountText, setUserPassengerAmountText] =
    useState("пассажир");
  const [userPassengerClass, setUserPassengerClass] = useState("Эконом");

  // Функция для очистки пространства при смене "фокуса" с элемента "input[text = "Откуда"]"
  function userWhereFromFocus() {
    if (toggledCalendarFromActiveClass) {
      setToggledCalendarFromActiveClass(!toggledCalendarFromActiveClass);
    }
    if (toggledCalendarToActiveClass) {
      setToggledCalendarToActiveClass(!toggledCalendarToActiveClass);
    }
    if (userDateToFocus) {
      setUserDateToFocus(!userDateToFocus);
    }
    if (userDateFromFocus) {
      setUserDateFromFocus(!userDateFromFocus);
    }
    if (toggledPassengerClass) {
      setToggledPassengerClass(!toggledPassengerClass);
    }
  }

  // Функция для очистки пространства при смене "фокуса" с элемента "input[text = "Куда"]"
  function userWhereToFocus() {
    if (toggledCalendarFromActiveClass) {
      setToggledCalendarFromActiveClass(!toggledCalendarFromActiveClass);
    }
    if (toggledCalendarToActiveClass) {
      setToggledCalendarToActiveClass(!toggledCalendarToActiveClass);
    }
    if (userDateToFocus) {
      setUserDateToFocus(!userDateToFocus);
    }
    if (userDateFromFocus) {
      setUserDateFromFocus(!userDateFromFocus);
    }
    if (toggledPassengerClass) {
      setToggledPassengerClass(!toggledPassengerClass);
    }
  }

  // Функция переключения на страницу Авиабилеты.
  // Function for switch to page Airtickets
  // class: toggled--tour
  const toggleClickHandlerAir = (e) => {
    e.preventDefault();
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

  // Функция для отображения календаря при клике на поле "Когда"
  // Function for calendar display when onClick at "userDateDisplayFrom" element
  // class: toggled--calendar
  const toggleCalendarFromActiveClickHandler = (e) => {
    if (toggledPassengerClass) {
      setToggledPassengerClass(!toggledPassengerClass);
    }
    setUserDateToFocus(false);
    setToggledCalendarToActiveClass(false);
    setToggledCalendarFromActiveClass(!toggledCalendarFromActiveClass);
    setUserDateFromFocus(!userDateFromFocus);
  };

  // Функция для отображения календаря при клике на поле "Обратно"
  // Function for calendar display when onClick at "userDateDisplayTo" element
  const toggleCalendarToActiveClickHandler = (e) => {
    if (toggledPassengerClass) {
      setToggledPassengerClass(!toggledPassengerClass);
    }
    // сбрасываем css класс соседней формы для корректного ввода даты
    setUserDateFromFocus(false);
    // вешаем css класс "toggled--calendar" для отображения календаря под выбранную пользователем форму
    setToggledCalendarFromActiveClass(false);
    // вешаем css класс "toggled--calendar" для отображения календаря под выбранную пользователем форму
    setToggledCalendarToActiveClass(!toggledCalendarToActiveClass);
    setUserDateToFocus(!userDateToFocus);
  };

  // Функция для создания и отображения объекта даты в поле (Когда), который ввёл пользователя.
  // Function for create users choosed date object and display it in current field
  const userClickCalendarDayFrom = (e) => {
    const userDateFromObj = {
      // TODO Сделать переключение на английский язык при смене языка в правом верхнем углу.
      WeekDayFrom: RuDayNumsToWeekdays(e.getDay()),
      DateFrom: e.getDate(),
      MonthFrom: RuMonthNumsToMonthNames(e.getMonth()),
      YearFrom: e.getFullYear(),
      FullDateFrom: e.toLocaleDateString(),
    };
    // Строка с выбором пользователя мб далее понадобится, поэтому заранее сделал так.
    //  String with user choice maybe usefull, then i did this
    const userDateFromChoosen = `${userDateFromObj.DateFrom} ${userDateFromObj.MonthFrom}, ${userDateFromObj.WeekDayFrom}, ${userDateFromObj.YearFrom}`;
    // TODO поробую сделать не строку а object для удобства
    //  setUserDateDisplayFrom(prev => userDateFromChoosen)
    setUserDateDisplayFrom((prev) => ({
      WeekDayFrom: userDateFromObj.WeekDayFrom,
      DateFrom: userDateFromObj.DateFrom,
      MonthFrom: userDateFromObj.MonthFrom,
      YearFrom: userDateFromObj.YearFrom,
      FullDateFrom: userDateFromObj.FullDateFrom,
    }));
    console.log(userDateFromObj);
    return userDateFromObj;
  };

  // Функция для создания и отображения объекта даты в поле (Обратно), который ввёл пользователя.
  // Function for create users choosed date object and display it in current field
  const userClickCalendarDayTo = (e) => {
    const userDateToObj = {
      // TODO Сделать переключение на английский язык при смене языка в правом верхнем углу.
      WeekDayTo: RuDayNumsToWeekdays(e.getDay()),
      DateTo: e.getDate(),
      MonthTo: RuMonthNumsToMonthNames(e.getMonth()),
      YearTo: e.getFullYear(),
      FullDateTo: e.toLocaleDateString(),
    };
    const userDateToChoosen = `${userDateToObj.DateTo} ${userDateToObj.MonthTo}, ${userDateToObj.WeekDayTo},
        ${userDateToObj.YearTo}`;

    // TODO поробую сделать не строку а object для удобства
    // setUserDateDisplayTo(prev => userDateToChoosen)
    setUserDateDisplayTo((prev) => ({
      WeekDayTo: userDateToObj.WeekDayTo,
      DateTo: userDateToObj.DateTo,
      MonthTo: userDateToObj.MonthTo,
      YearTo: userDateToObj.YearTo,
      FullDateTo: userDateToObj.FullDateTo,
    }));

    console.log(userDateToObj);
    return userDateToObj;
  };

  function handleClickUserPassenger() {
    if (toggledCalendarFromActiveClass) {
      setToggledCalendarFromActiveClass(!toggledCalendarFromActiveClass);
    }
    if (toggledCalendarToActiveClass) {
      setToggledCalendarToActiveClass(!toggledCalendarToActiveClass);
    }
    if (userDateToFocus) {
      setUserDateToFocus(!userDateToFocus);
    }
    if (userDateFromFocus) {
      setUserDateFromFocus(!userDateFromFocus);
    }

    setToggledPassengerClass(!toggledPassengerClass);
  }

  const userTicketData = {
    TicketFrom: userTravelFrom,
    TicketTo: userTravelTo,
    TicketDateStart: userDateDisplayFrom == "Когда" ? "" : userDateDisplayFrom,
    TicketDateEnd: userDateDisplayTo == "Обратно" ? "" : userDateDisplayTo,
    TicketClass: userPassengerClass,
    TicketPassengers: null,
    // TicketFullDate: userDateDisplayFrom.FullDateFrom,
  };

  let toggleClassEco = useRef(true);
  let toggleClassComf = useRef(false);
  let toggleClassBiz = useRef(false);
  let toggleClassFirst = useRef(false);

  const handleClickSubmit = (e) => {
    // e.preventDefault();
    console.log(userTicketData);
  };

  // TODO experemental trash...
  const handleInputChangeClass = (e) => {
    console.log(e.target.value);
    setUserPassengerClass(e.target.value);
    sessionStorage.setItem("Класс", e.target.value)

    // if (e.target.value == "Комфорт") {
    //   toggleClassComf = true;
    //   toggleClassEco = false;
    //   toggleClassBiz = false;
    //   toggleClassFirst = false;
    // }
    // if (e.target.value == "Бизнес") {
    //   toggleClassBiz = true;
    //   toggleClassComf = false;
    //   toggleClassEco = false;
    //   toggleClassFirst = false;
    // }
    // if (e.target.value == "Первый класс") {
    //   toggleClassFirst = true;
    //   toggleClassBiz = false;
    //   toggleClassComf = false;
    //   toggleClassEco = false;
    // }
    // if (e.target.value == "Эконом") {
    //   toggleClassEco = true;
    //   toggleClassFirst = false;
    //   toggleClassBiz = false;
    //   toggleClassComf = false;
    // }
  };
  
  function getSavedClassValueEco(){
    let classCache = sessionStorage.getItem("Класс");
    if (classCache == "Эконом") {
      return true;
    }
    return false;
  }

  function getSavedClassValueComf(){
    let classCache = sessionStorage.getItem("Класс");
    if (classCache == "Комфорт") {
      return true;
    }
    return false;
  }

  function getSavedClassValueBiz(){
    let classCache = sessionStorage.getItem("Класс");
    if (classCache == "Бизнес") {
      return true;
    }
    return false;
  }

  function getSavedClassValueFirst(){
    let classCache = sessionStorage.getItem("Класс");
    if (classCache == "Первый класс") {
      return true;
    }
    return false;
  }

  return (
    <>
      <div className="section_wrapper">
        <section className="main_section">
          <div className="main_section_inner-wrapper">
            <div className="h1_wrapper">
              <h1>
                Тут {text1} дешёвые {text2}
              </h1>
            </div>
            <Nav page="/" />
            <div className="form_tickets_wrapper">
              <form action="/ticket" className="main_form" id="uniqueForm">
                <div className="form_inner_wrapper">
                  <input
                    type="text"
                    spellCheck="true"
                    placeholder="Откуда"
                    name="textFrom"
                    id="textFrom"
                    onChange={(e) => setUserTravelFrom(e.target.value)}
                    onFocus={userWhereFromFocus}
                  />

                  <input
                    type="text"
                    spellCheck="true"
                    placeholder="Куда"
                    name="textTo"
                    id="textTo"
                    onChange={(e) => setUserTravelTo(e.target.value)}
                    onFocus={userWhereToFocus}
                  />

                  <button
                    type="button"
                    // Переписать под изменение класса
                    className={`${
                      toggledCalendarFromActiveClass ? "toggled--calendar" : ""
                    }`}
                    onClick={toggleCalendarFromActiveClickHandler}
                  >
                    <div className="button_inner_wrapper">
                      <span className="user_date_from">
                        {/* {userDateDisplayFrom} */}
                        {userDateDisplayFrom.DateFrom
                          ? `${userDateDisplayFrom.DateFrom},
                                              ${userDateDisplayFrom.MonthFrom},
                                              ${userDateDisplayFrom.WeekDayFrom},
                                              ${userDateDisplayFrom.YearFrom}`
                          : "Когда"}
                      </span>
                      <>
                        <SvgCalendar />
                      </>
                    </div>
                  </button>
                  <button
                    type="button"
                    // Переписать под изменение класса
                    className={`${
                      toggledCalendarToActiveClass ? "toggled--calendar" : ""
                    }`}
                    onClick={toggleCalendarToActiveClickHandler}
                  >
                    <div className="button_inner_wrapper">
                      <span className="user_date_to">
                        {/* {userDateDisplayTo} */}
                        {userDateDisplayTo.DateTo
                          ? `${userDateDisplayTo.DateTo},
                                              ${userDateDisplayTo.MonthTo},
                                              ${userDateDisplayTo.WeekDayTo},
                                              ${userDateDisplayTo.YearTo}`
                          : "Обратно"}
                      </span>
                      <>
                        <SvgCalendar />
                      </>
                    </div>
                  </button>
                  <button type="button" onClick={handleClickUserPassenger}>
                    <div className="button_inner_wrapper passenger_and_class">
                      <span
                        className={`${
                          toggledPassengerClass
                            ? "user_passenger user_passenger-rotate"
                            : "user_passenger"
                        }`}
                      >
                        {/* hash.1 */}
                        {userPassengerAmount} {userPassengerAmountText}
                      </span>
                      <span className="passenger_class">
                        {userPassengerClass}
                      </span>
                    </div>
                  </button>
                  <input
                    type="submit"
                    value="Найти билеты"
                    id="findTickets"
                    name="findTickets"
                    onClick={handleClickSubmit}
                  />
                </div>
              </form>
              {userDateFromFocus ? (
                <div className="calendar_wrapper">
                  <Calendar
                    defaultActiveStartDate={new Date()}
                    onClickDay={userClickCalendarDayFrom}
                  />
                </div>
              ) : (
                ""
              )}

              {userDateToFocus ? (
                <div className="calendar_wrapper">
                  <Calendar
                    defaultActiveStartDate={new Date()}
                    onClickDay={userClickCalendarDayTo}
                  />
                </div>
              ) : (
                ""
              )}
              {toggledPassengerClass ? (
                <div className="passengers_wrapper">
                  <div className="inner_passengers_wrapper">
                    <span> Количество пассажиров </span>

                    <TypePassengerAdults
                      ageGroup="Взрослые"
                      ageGroupParams="12 лет и старше"
                      defaultPassengerAmount={Number(1)}
                      userPassengerAmount={userPassengerAmount}
                      setUserPassengerAmount={setUserPassengerAmount}
                      userPassengerAmountText={userPassengerAmountText}
                      setUserPassengerAmountText={setUserPassengerAmountText}
                    />

                    <TypePassengerKids
                      ageGroup="Дети"
                      ageGroupParams="от 2 до 11 лет"
                      defaultPassengerAmount={Number(0)}
                      userPassengerAmount={userPassengerAmount}
                      setUserPassengerAmount={setUserPassengerAmount}
                      userPassengerAmountText={userPassengerAmountText}
                      setUserPassengerAmountText={setUserPassengerAmountText}
                    />

                    <TypePassengerBabies
                      ageGroup="Младенцы"
                      ageGroupParams="Младше 2 лет, без места"
                      defaultPassengerAmount={Number(0)}
                      userPassengerAmount={userPassengerAmount}
                      setUserPassengerAmount={setUserPassengerAmount}
                      userPassengerAmountText={userPassengerAmountText}
                      setUserPassengerAmountText={setUserPassengerAmountText}
                    />
                  </div>
                  <div className="type_class_section">
                    <div className="type_class_wrapper">
                      <span> Класс обслуживания</span>
                      <div className="type_component_wrapper">
                        <TypeClass
                          classType="class_type_eco"
                          classValue="Эконом"
                          elementName="type"
                          defaultValue={""}
                          defaultChecked={getSavedClassValueEco()}
                          reff={toggleClassEco}
                          handleInputChangeClass={handleInputChangeClass}
                        />
                        <TypeClass
                          classType="class_type_comf"
                          classValue="Комфорт"
                          elementName="type"
                          defaultValue={""}
                          defaultChecked={getSavedClassValueComf()}
                          reff={toggleClassComf}
                          handleInputChangeClass={handleInputChangeClass}
                        />
                        <TypeClass
                          classType="class_type_biz"
                          classValue="Бизнес"
                          elementName="type"
                          defaultValue={""}
                          defaultChecked={getSavedClassValueBiz()}
                          reff={toggleClassBiz}
                          handleInputChangeClass={handleInputChangeClass}
                        />
                        <TypeClass
                          classType="class_type_first"
                          classValue="Первый класс"
                          elementName="type"
                          defaultValue={""}
                          defaultChecked={getSavedClassValueFirst()}
                          reff={toggleClassFirst}
                          handleInputChangeClass={handleInputChangeClass}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
