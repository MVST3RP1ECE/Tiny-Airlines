/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import './MainSection.css'
import SvgAirplane from '../SVG/SvgAirplane'
import SvgHotel from '../SVG/SvgHotel'
import Calendar from 'react-calendar'
import SvgCalendar from '../SVG/SvgCalendar'
import SvgPassenger from '../SVG/SvgPassenger'
import {EngDayNumsToWeekdays, EngMonthNumsToMonthNames, RuDayNumsToWeekdays, RuMonthNumsToMonthNames} from 
'/src/ExternalLogic/DateConverter.js'


export default function MainSection() {
    // toggled class: toggled--tour
    const [toggledTourClassAirplane, setToggledTourClassAirplane] = useState(true)
    const [toggledTourClassHotel, setToggledTourClassHotel] = useState(false)

    const [userDateDisplayFrom, setUserDateDisplayFrom] = useState("Когда");
    const [userDateDisplayTo, setUserDateDisplayTo] = useState("Обртано");

    const [userDateToFocus, setUserDateToFocus] = useState(false);

    const toggleClickHandler = (e) => {
        e.preventDefault();
        setToggledTourClassAirplane(!toggledTourClassAirplane);
        setToggledTourClassHotel(!toggledTourClassHotel);
    }


    const userClickCalendarDayFrom = (e) => {
        const userDateFromObj = {
            // TODO Сделать переключение на английский язык при смене языка в правом верхнем углу.
            WeekDayFrom: RuDayNumsToWeekdays(e.getDay()),
            DateFrom: e.getDate(),
            MonthFrom: RuMonthNumsToMonthNames(e.getMonth()),
            YearFrom: e.getFullYear(),
            FullDate: e.toLocaleDateString()
        }
// --------------------------------- Строка с выбором пользователя мб далее понадобится, поэтому заранее сделал так.
// --------------------------------- String with user choice maybe usefull, then i did this
        const userDateFromChoosen = `${userDateFromObj.DateFrom} ${userDateFromObj.MonthFrom}, ${userDateFromObj.WeekDayFrom}`
        setUserDateDisplayFrom(prev => userDateFromChoosen)
// ---------------------------------
        console.log(userDateFromObj);
    }
    function handleClickUserDateFrom(){
        // console.log(123);
        setUserDateToFocus(!userDateToFocus);
    }

    function handleClickUserDateTo(){
        console.log(456);
    }

    function handleClickUserPassenger(){
        console.log("Passengers");
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
                                    <a href="/" className={`tour_link ${toggledTourClassAirplane ? 'toggled--tour' : ''}`} onClick={toggleClickHandler}>
                                        <div className='tour_svg'>
                                            <SvgAirplane/>
                                        </div>
                                        <div  className='tour_plaintext'>Авиабилеты</div>
                                    </a>
                                </li>
                                <li className='list_item_tour'>
                                    <a href="/" className={`tour_link ${toggledTourClassHotel ? 'toggled--tour' : ''}`} onClick={toggleClickHandler}>
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
                                <input type="text" placeholder='Откуда' name="" id="" />
                                <input type="text" placeholder='Куда' name="" id="" />
                                <button type="button" onFocus={handleClickUserDateFrom}>
                                    <div className='button_inner_wrapper'>
                                        <span className='user_date_from'>
                                            {userDateDisplayFrom}
                                        </span>
                                        <>
                                            <SvgCalendar/>
                                        </>
                                    </div>
                                </button>
                                <button type="button" onFocus={handleClickUserDateTo}>
                                    <div className='button_inner_wrapper'>
                                            <span className='user_date_to'>
                                                {userDateDisplayTo}
                                            </span>
                                            <>
                                                <SvgCalendar/>
                                            </>
                                        </div>
                                </button>
                                <button type="button" value="" onClick={handleClickUserPassenger}>
                                    <div className='button_inner_wrapper'>
                                        <span className='user_passenger'>
                                            1 Пассажир
                                        </span>
                                        {/* <div className='arrow_dropdown_passenger'>
                                            CSS Arrow Dropdown
                                        </div> */}
                                    </div>
                                </button>
                                <input type="submit" disabled value="Найти билеты"/>
                            </div>
                        </form>
                        {   
                        userDateToFocus ?
                        <div className='calendar_wrapper'>
                            <Calendar 
                            defaultActiveStartDate={new Date()} 
                            onClickDay={userClickCalendarDayFrom}
                            />
                        </div>  
                        : ""}
                    </div>
                </div>    
            </section>
        </div>
    </>
  )
}
