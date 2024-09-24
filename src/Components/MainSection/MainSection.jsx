/* eslint-disable no-unused-vars */
import React, { useCallback, useMemo, useRef, useState } from 'react'
import './MainSection.css'
import SvgAirplane from '../SVG/SvgAirplane'
import SvgHotel from '../SVG/SvgHotel'
import Calendar from 'react-calendar'
import SvgCalendar from '../SVG/SvgCalendar'
import SvgPassenger from '../SVG/SvgPassenger'
import {EngDayNumsToWeekdays, EngMonthNumsToMonthNames, RuDayNumsToWeekdays, RuMonthNumsToMonthNames} from 
'/src/ExternalLogic/DateConverter.js'
import TypePassenger from '../TypePassenger/TypePassenger'
import TypeClass from '../TypeClass/TypeClass'

export default function MainSection() {
    // Состояниее для переключения текущей страницы (Билеты/Отели). !На данный момент существует только 1 страница (Авиабилеты)
    // State for switch current page (Airtickets/Hotels). !At this time working only 1 page (Airtickets)
    const [toggledTourClassAirplane, setToggledTourClassAirplane] = useState(true)
    const [toggledTourClassHotel, setToggledTourClassHotel] = useState(false)


    // Состояние для добавления css класса к прожатой кнопке выбора даты.
    // State for add css class to pressed date button
    const [toggledCalendarFromActiveClass, setToggledCalendarFromActiveClass] = useState(false)
    const [toggledCalendarToActiveClass, setToggledCalendarToActiveClass] = useState(false)

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
    const [userPassengerAmount, setUserPassengerAmount] = useState("1 пассажир")
    const [userPassengerClass, setUserPassengerClass] = useState("Эконом")

    // Функция переключения на страницу Авиабилеты.
    // Function for switch to page Airtickets
    // class: toggled--tour
    const toggleClickHandlerAir = (e) =>{
        e.preventDefault();
        if (e.currentTarget.className === "tour_link toggled--tour") {
            return 0
        }
        setToggledTourClassAirplane(!toggledTourClassAirplane);
        setToggledTourClassHotel(!toggledTourClassHotel);
    }

    // Функция переключения на страницу Отели.
    // Function for switch to page Hotels
    // class: toggled--tour
    const toggleClickHandlerHotel = (e) =>{
        e.preventDefault();
        if (e.currentTarget.className === "tour_link toggled--tour") {
            return 0
        }
        setToggledTourClassAirplane(!toggledTourClassAirplane);
        setToggledTourClassHotel(!toggledTourClassHotel);
    }

    // Функция для отображения календаря при клике на поле "Когда"
    // Function for calendar display when onClick at "userDateDisplayFrom" element
    // class: toggled--calendar
    const toggleCalendarFromActiveClickHandler = (e) => {
        setUserDateToFocus(false)
        setToggledCalendarToActiveClass(false) 
        setToggledCalendarFromActiveClass(!toggledCalendarFromActiveClass)
        setUserDateFromFocus(!userDateFromFocus)
    }

    // Функция для отображения календаря при клике на поле "Обратно"
    // Function for calendar display when onClick at "userDateDisplayTo" element
    const toggleCalendarToActiveClickHandler = (e) => {
        // сбрасываем css класс соседней формы для корректного ввода даты 
        setUserDateFromFocus(false)
        // вешаем css класс "toggled--calendar" для отображения календаря под выбранную пользователем форму
        setToggledCalendarFromActiveClass(false)
        // вешаем css класс "toggled--calendar" для отображения календаря под выбранную пользователем форму
        setToggledCalendarToActiveClass(!toggledCalendarToActiveClass) 
        setUserDateToFocus(!userDateToFocus)
    }

    // Функция для создания и отображения объекта даты в поле (Когда), который ввёл пользователя.
    // Function for create users choosed date object and display it in current field
    const userClickCalendarDayFrom = (e) => {
        const userDateFromObj = {
            // TODO Сделать переключение на английский язык при смене языка в правом верхнем углу.
            WeekDayFrom: RuDayNumsToWeekdays(e.getDay()),
            DateFrom: e.getDate(),
            MonthFrom: RuMonthNumsToMonthNames(e.getMonth()),
            YearFrom: e.getFullYear(),
            FullDateFrom: e.toLocaleDateString()
        }
    // Строка с выбором пользователя мб далее понадобится, поэтому заранее сделал так.
    //  String with user choice maybe usefull, then i did this
        const userDateFromChoosen = 
        `${userDateFromObj.DateFrom} ${userDateFromObj.MonthFrom}, ${userDateFromObj.WeekDayFrom}, ${userDateFromObj.YearFrom}`
        // TODO поробую сделать не строку а object для удобства
        //  setUserDateDisplayFrom(prev => userDateFromChoosen)
        setUserDateDisplayFrom(prev => ({
            WeekDayFrom: userDateFromObj.WeekDayFrom,
            DateFrom: userDateFromObj.DateFrom,
            MonthFrom: userDateFromObj.MonthFrom,
            YearFrom: userDateFromObj.YearFrom,
            FullDateFrom: userDateFromObj.FullDateFrom
        }))
        console.log(userDateFromObj);
        return userDateFromObj;
    }

    // Функция для создания и отображения объекта даты в поле (Обратно), который ввёл пользователя.
    // Function for create users choosed date object and display it in current field
    const userClickCalendarDayTo = (e) =>{
        const userDateToObj = {
            // TODO Сделать переключение на английский язык при смене языка в правом верхнем углу.
            WeekDayTo: RuDayNumsToWeekdays(e.getDay()),
            DateTo: e.getDate(),
            MonthTo: RuMonthNumsToMonthNames(e.getMonth()),
            YearTo: e.getFullYear(),
            FullDateTo: e.toLocaleDateString()
        }
        const userDateToChoosen = `${userDateToObj.DateTo} ${userDateToObj.MonthTo}, ${userDateToObj.WeekDayTo},
        ${userDateToObj.YearTo}`

        // TODO поробую сделать не строку а object для удобства
        // setUserDateDisplayTo(prev => userDateToChoosen)
        setUserDateDisplayTo(prev => ({
            WeekDayTo: userDateToObj.WeekDayTo,
            DateTo: userDateToObj.DateTo,
            MonthTo: userDateToObj.MonthTo,
            YearTo: userDateToObj.YearTo,
            FullDateTo: userDateToObj.FullDateTo
        }))

        console.log(userDateToObj);
        return userDateToObj;
    }

    function handleClickUserPassenger(){
        setToggledPassengerClass(!toggledPassengerClass);
        console.log("Passengers");
    }

    const userTicketData = {
        TicketFrom: userTravelFrom,
        TicketTo: userTravelTo,
        TicketDateStart: userDateDisplayFrom == "Когда" ? "" : userDateDisplayFrom,
        TicketDateEnd: userDateDisplayTo == "Обратно" ? "" : userDateDisplayTo,
        TicketClass: userPassengerClass,
        TicketPassengers: null,
        // TicketFullDate: userDateDisplayFrom.FullDateFrom,
    }

    const handleClickSubmit = (e) =>{
        e.preventDefault();
        console.log(userTicketData);
    }

    const handleInputChangeClass = (e) => {
        console.log(e.target.value);
        setUserPassengerClass(e.target.value)
    }

    // TODO РЕФАКТОРИТЬ компонент <TypePassenger> разбить его на 3 компонента 
    // <TypePassengerAdults> , <TypePassengerKids> , <TypePassengerBabies>
    const handlePassengerControlAdults = (e) => {

    }
    const handlePassengerControlKids = (e) => {

    }
    const handlePassengerControlBabies = (e) => {

    }

  return (
    <>
        <div className='section_wrapper'>
            <section className='main_section'>
                <div className='main_section_inner-wrapper'>
                    <div className='h1_wrapper'>
                        <h1> Тут покупают дешёвые авиабилеты</h1>
                    </div>
                    <div className='nav_tour_wrapper'>
                        <nav className='nav_main_section'>
                            <ul className='list_main_section'>
                                <li className='list_item_tour'>
                                    <a href="/" 
                                    className={`tour_link ${toggledTourClassAirplane ? 'toggled--tour' : ''}`} 
                                    // onClick={toggleClickHandler}
                                    onClick={toggleClickHandlerAir}
                                    >
                                        <div className='tour_svg'>
                                            <SvgAirplane/>
                                        </div>
                                        <div  className='tour_plaintext'>Авиабилеты</div>
                                    </a>
                                </li>
                                <li className='list_item_tour'>
                                    <a href="/" 
                                    className={`tour_link ${toggledTourClassHotel ? 'toggled--tour' : ''}`} 
                                    // onClick={toggleClickHandler}
                                    onClick={toggleClickHandlerHotel}
                                    >
                                        <div className='tour_svg'>
                                            <SvgHotel/> 
                                        </div>
                                        <div className='tour_plaintext'>Отели</div>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className='form_tickets_wrapper'>
                        <form action="" className='main_form'>
                            <div className='form_inner_wrapper'>

                                <input type="text" placeholder='Откуда' name="" id="" 
                                onChange= {e => setUserTravelFrom(e.target.value)}/>


                                <input type="text" placeholder='Куда' name="" id=""
                                onChange= {e => setUserTravelTo(e.target.value)}/>

                                <button type="button" 
                                // Переписать под изменение класса
                                className={`${toggledCalendarFromActiveClass ? 'toggled--calendar' : ''}`}
                                onClick={toggleCalendarFromActiveClickHandler}
                                >
                                    <div className='button_inner_wrapper'>
                                        <span className='user_date_from'>
                                            {/* {userDateDisplayFrom} */}
                                            { userDateDisplayFrom.DateFrom ? 
                                            `${userDateDisplayFrom.DateFrom},
                                              ${userDateDisplayFrom.MonthFrom},
                                              ${userDateDisplayFrom.WeekDayFrom},
                                              ${userDateDisplayFrom.YearFrom}`
                                            : "Когда"}
                                        </span>
                                        <>
                                            <SvgCalendar/>
                                        </>
                                    </div>
                                </button>
                                <button type="button" 
                                // Переписать под изменение класса
                                className={`${toggledCalendarToActiveClass ? 'toggled--calendar' : ""}`}
                                onClick={toggleCalendarToActiveClickHandler}
                                >
                                    <div className='button_inner_wrapper'>
                                            <span className='user_date_to'>
                                                {/* {userDateDisplayTo} */}
                                            {userDateDisplayTo.DateTo ? 
                                            `${userDateDisplayTo.DateTo},
                                              ${userDateDisplayTo.MonthTo},
                                              ${userDateDisplayTo.WeekDayTo},
                                              ${userDateDisplayTo.YearTo}`
                                            : "Обратно"}
                                            </span>
                                            <>
                                                <SvgCalendar/>
                                            </>
                                        </div>
                                </button>
                                <button type="button" value="" 
                                onClick={handleClickUserPassenger}>
                                    <div className='button_inner_wrapper passenger_and_class'>
                                        <span 
                                        className={`${toggledPassengerClass ? 'user_passenger user_passenger-rotate' : "user_passenger"}`}>
                                            {userPassengerAmount}
                                        </span>
                                        <span className='passenger_class'>{userPassengerClass}</span>
                                    </div>
                                </button>
                                <input type="submit" value="Найти билеты" onClick={handleClickSubmit}/>
                            </div>
                        </form>
                        {   
                        userDateFromFocus ?
                        <div className='calendar_wrapper'> 
                            <Calendar 
                            defaultActiveStartDate={new Date()} 
                            onClickDay={userClickCalendarDayFrom}
                            />
                        </div>  
                        : ""}

                        {   
                        userDateToFocus ?
                        <div className='calendar_wrapper'> 
                            <Calendar 
                            defaultActiveStartDate={new Date()} 
                            onClickDay={userClickCalendarDayTo}
                            />
                        </div>  
                        : ""}

                        {
                        toggledPassengerClass ? 
                        <div className='passengers_wrapper'>
                            <div className='inner_passengers_wrapper'>
                                <span> Количество пассажиров </span>
                                <TypePassenger ageGroup="Взрослые" ageGroupParams="12 лет и старше" 
                                defaultPassengerAmount={1}
                                passengerControlAdults={handlePassengerControlAdults}/>
                                <TypePassenger ageGroup="Дети" ageGroupParams="от 2 до 11 лет" 
                                defaultPassengerAmount={0}
                                passengerControlKids={handlePassengerControlKids}/>
                                <TypePassenger ageGroup="Младенцы" ageGroupParams="Младше 2 лет, без места" 
                                defaultPassengerAmount={0}
                                passengerControlBabies={handlePassengerControlBabies}/>
                            </div>
                            <div className='type_class_section'>
                                <div className='type_class_wrapper'>
                                    <span> Класс обслуживания</span>
                                    <div className='type_component_wrapper'>
                                        <TypeClass classType="class_type_eco" classValue="Эконом" elementName="type"
                                        defaultValue={false} handleInputChangeClass={handleInputChangeClass}/>
                                        <TypeClass classType="class_type_comf" classValue="Комфорт" elementName="type"
                                        defaultValue={false} handleInputChangeClass={handleInputChangeClass}/>
                                        <TypeClass classType="class_type_biz" classValue="Бизнес" elementName="type"
                                        defaultValue={false} handleInputChangeClass={handleInputChangeClass}/>
                                        <TypeClass classType="class_type_first" classValue="Первый класс" elementName="type"
                                        defaultValue={false} handleInputChangeClass={handleInputChangeClass}/>
                                    </div>
                                </div>
                            </div>
                        </div> : ""
                        }
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
