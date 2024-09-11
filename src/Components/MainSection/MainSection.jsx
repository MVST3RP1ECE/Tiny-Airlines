import React, { useState } from 'react'
import './MainSection.css'
import SvgAirplane from '../SVG/SvgAirplane'
import SvgHotel from '../SVG/SvgHotel'

export default function MainSection() {


    // toggled class: toggled--tour
    const [toggleTourClass, setToggleTourClass] = useState(true)

    // TODO ----------------------------------------------- Отановился сдесь -----------------------------------------------
    const toggleClickHandler = (e) => {
        e.preventDefault();
        console.log(123);
    }

    /* TODO Сделать логику переключения стилей в элементе "list_item_tour". По умолчанию выбран 1 пункт списка (Авиабилеты).
            Если пункт выбран, то bgc: white, svg-fill: black, color: black. Если не выбран, то bgc: #0656fe, svg-fill: Lightgray. color: Lightgray */
  return (
    <>
        <div className='section_wrapper'>
            <section className='main_section'>
                <div className='main_section_inner-wrapper'>
                    <div className='h1_wrapper'>
                        <h1> Тут покупают дешёвые авиабилеты!</h1>
                    </div>
                    <div className='nav_tour_wrapper'>
                        <nav className='nav_main_section'>
                            <ul className='list_main_section'>
                                <li className='list_item_tour'>
                                    <a href="/" className='tour_link' onClick={toggleClickHandler}>
                                        <div className='tour_svg'>
                                            <SvgAirplane/>
                                        </div>
                                        <div className='tour_plaintext'>Авиабилеты</div>
                                    </a>
                                </li>
                                <li className='list_item_tour'>
                                    <a href="/" className='tour_link' onClick={toggleClickHandler}>
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
                        <form action="">

                        </form>
                    </div>
                </div>    
            </section>
        </div>
    </>
  )
}
