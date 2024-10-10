import React from "react";
import App from "../App";
import { Link } from "react-router-dom";
import "./RoutesStyles/Ticket.css";
import Header from "../Components/Header/Header";
import SvgAirplane from "../Components/SVG/SvgAirplane";
import ButtonToMain from "../Components/Button/ButtonToMain";
import CalculateTicketPrice from "../ExternalLogic/CalculateTicketPrice";


export default function Ticket() {

  console.log(sessionStorage.getItem("Окончание поездки"));

  let dateStart = sessionStorage.getItem("Начало поездки");
  let dateEnd = sessionStorage.getItem("Окончание поездки");

  if(dateStart === "undefined, undefined"){
    return dateStart = "Неизвестно"
  }

  if(dateEnd === "undefined, undefined"){
    return dateEnd = "Неизвестно"
  }
  

  return (
    <>
      <Header />
      <section className="tickets_section">
        <div className="tickets_wrapper">
          <div className="ticket_desc">
            <h1>Ваш билет</h1>
            <div className="desc_details">
              <div className="text_container">

                <div className="ticket_from">
                  <p>Откуда</p>
                  <p>{sessionStorage.getItem("Откуда") ? sessionStorage.getItem("Откуда") : "Неизвестно" }</p>
                </div>

                <div className="ticket_to">
                  <p>Куда</p>
                  <p>{sessionStorage.getItem("Куда") ? sessionStorage.getItem("Куда") : "Неизвестно"}</p>
                </div>

                <div className="ticket_date_from">
                  <p>Начало поездки</p>
                  <p>{String(sessionStorage.getItem("Начало поездки")) != "undefined, undefined"
                  ? sessionStorage.getItem("Начало поездки") 
                  : dateStart}</p>
                </div>

                <div className="ticket_date_to">
                  <p>Окончание поездки</p>
                  <p>{String(sessionStorage.getItem("Окончание поездки")) != "undefined, undefined"
                  ? sessionStorage.getItem("Окончание поездки") 
                  : dateEnd}</p>
                </div>

                <div className="amount_passengers">
                  <ul className="amount_list">
                    <li>Количество пассажиров</li>
                    <li>{sessionStorage.getItem("Всего пассажиров") ? sessionStorage.getItem("Всего пассажиров") : "Неизвестно" }</li>
                  </ul>
                </div>

                <div className="amount_passengers_adults">
                  <ul className="amount_list">
                    <li>Количество взрослых</li>
                    <li>{sessionStorage.getItem("Пассажиры Взрослые") ? sessionStorage.getItem("Пассажиры Взрослые") : "Неизвестно"}</li>
                  </ul>
                </div>

                <div className="amount_passengers_kids">
                  <ul className="amount_list">
                    <li>Количество детей</li>
                    <li>{sessionStorage.getItem("Пассажиры Дети") ? sessionStorage.getItem("Пассажиры Дети") : "Неизвестно" }</li>
                  </ul>
                </div>

                <div className="amount_passengers_babies">
                  <ul className="amount_list">
                    <li>Количество младенцев</li>
                    <li>{sessionStorage.getItem("Пассажиры Младенцы") ? sessionStorage.getItem("Пассажиры Младенцы") : "Неизвестно"}</li>
                  </ul>
                </div>
                
                <div className="ticket_class">
                  <p>Класс билета</p>
                  <p>{sessionStorage.getItem("Класс") ? sessionStorage.getItem("Класс") : "Неизвестно"}</p>
                </div>

                <div className="ticket_price">
                  <h2>Цена билета</h2>
                  {typeof CalculateTicketPrice() === "string" ? 
                  <h2>
                    Поездка за счёт компании!
                  </h2> 
                  : 
                  <h2>{CalculateTicketPrice()} р.</h2>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ButtonToMain />
    </>
  );
}
