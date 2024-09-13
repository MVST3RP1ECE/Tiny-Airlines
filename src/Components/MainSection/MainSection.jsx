import React, { useRef, useState } from 'react'
import './MainSection.css'
import SvgAirplane from '../SVG/SvgAirplane'
import SvgHotel from '../SVG/SvgHotel'

export default function MainSection() {


    // toggled class: toggled--tour
    const [toggledTourClassAirplane, setToggledTourClassAirplane] = useState(true)
    const [toggledTourClassHotel, setToggledTourClassHotel] = useState(false)

    const toggleClickHandler = (e) => {
        e.preventDefault();
        setToggledTourClassAirplane(!toggledTourClassAirplane);
        setToggledTourClassHotel(!toggledTourClassHotel);
    }

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
                            <input type="text" placeholder='Откуда' name="" id="" />
                            <input type="text" placeholder='Куда' name="" id="" />
                            <input type="date" name="" id="" />
                            <input type="date" name='' id=''/>
                            <button type="button" value="Пассажиры"></button>
                            <input type="submit" />
                        </form>
                    </div>
                </div>    
            </section>
        </div>
    </>
  )
}
