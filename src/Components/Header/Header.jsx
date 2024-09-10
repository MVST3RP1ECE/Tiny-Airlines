import React from 'react'
import ReactCountryDropdown from 'react-country-dropdown';
import Button from '../Button/ButtonSVG';
import SvgCurrency from "../SVG/SvgCurrency"
import SvgProfile from '../SVG/SvgProfile';
import SvgSupport from '../SVG/SvgSupport';
import SvgAviaSales from '../SVG/SvgAviaSales';
import SvgTinyAirlines from '../SVG/SvgTinyAirlines';
import "./Header.css"

export default function Header() {

  return (
    <div className='navBar'>
        <div className='navBar_wrapper'>
            <div className='navBar_container'>
                <a href="https://www.aviasales.ru" target='_blank' className='origin_link'>
                    <span className='svg_header_wrapper'>
                        <SvgAviaSales/>
                        <SvgTinyAirlines/>
                    </span>
                </a>
                <div className='nav_separator'></div>
                <div className='menu'>
                    <div className='menu_wrapper'>
                        <span className='button_wrapper profile_wrapper'>
                            <Button text="Профиль" icon={<SvgProfile/>}/>
                            {/* <button className='button_profile' onClick={logOut}>
                                <div className='svg_wrapper'>
                                    <svg width="24" height="24" viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d="M8.102 5.224C8 5.605 8 6.07 8 7v2c0 .93 0 1.395.102 1.777a3 3 0 0 0 2.121 2.12C10.605 13 11.07 13 12 13c.93 0 1.395 0 1.777-.102a3 3 0 0 0 2.12-2.121C16 10.395 16 9.93 16 9V7c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.121-2.122C13.395 3 12.93 3 12 3c-.93 0-1.395 0-1.777.102a3 3 0 0 0-2.12 2.122ZM11 15a6 6 0 0 0-6 6h14a6 6 0 0 0-6-6h-2Z"></path></svg>
                                </div>
                                <p className='plain_text'>
                                    Профиль
                                </p>
                            </button> */}
                        </span>
                        <span className="button_wrapper support_wrapper">
                            <Button text="Поддержка" icon={<SvgSupport/>}/>
                            {/* <button className='button_support' onClick={logOut}>
                                <div className='svg_wrapper'>
                                    <svg>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 21a9 9 0 1 0-7.586-4.155L3 20l1 1 3.155-1.414A8.958 8.958 0 0 0 12 21Zm1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1.14-8.645c.668.454 1.11 1.189 1.11 2.145 0 .767-.355 1.3-.78 1.682-.272.245-.634.472-.92.651-.097.061-.186.117-.259.166-.35.233-.545.419-.641.628-.072.155-.129.412-.015.873h-1.528c-.084-.56-.024-1.058.18-1.502.28-.604.772-.98 1.172-1.247.158-.105.295-.191.418-.268.236-.148.42-.262.59-.416.2-.18.283-.335.283-.567 0-.443-.183-.72-.453-.905-.298-.202-.743-.312-1.237-.272-1.02.081-1.81.71-1.81 1.677h-1.5c0-2.033 1.71-3.054 3.19-3.172.756-.06 1.56.092 2.2.527Z"></path>
                                    </svg>
                                </div>
                                <p>Поддержка</p>
                            </button> */}
                        </span>
                        <span className="button_wrapper currency_wrapper">
                            <Button text="RUB" icon={<SvgCurrency/>}/>
                            {/* <button className='button_currency' onClick={logOut}>
                                <div className='svg_wrapper'>
                                    <svg>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-16c-.025 0-.17.01-.42.292-.248.28-.518.744-.765 1.402-.195.52-.363 1.128-.496 1.806h3.362c-.133-.678-.301-1.286-.496-1.806-.247-.658-.517-1.121-.766-1.402C12.17 5.01 12.025 5 12 5Zm-3.058.992A13.93 13.93 0 0 0 8.286 8.5h-2.35a7.03 7.03 0 0 1 3.149-2.866c-.05.117-.097.237-.143.358ZM8.05 10.5H5.161a7.026 7.026 0 0 0 0 3h2.89a22.209 22.209 0 0 1 0-3Zm.236 5h-2.35a7.027 7.027 0 0 0 3.148 2.866 10.953 10.953 0 0 1-.42-1.199 15.35 15.35 0 0 1-.378-1.667Zm2.033 0h3.362c-.133.678-.301 1.286-.496 1.806-.247.658-.517 1.121-.766 1.402-.25.282-.394.292-.419.292-.03 0-.225-.019-.543-.444-.307-.41-.616-1.064-.871-1.946-.1-.344-.19-.716-.267-1.11Zm3.626-2h-3.89a20.15 20.15 0 0 1 0-3h3.89a20.127 20.127 0 0 1 0 3Zm1.769 2c-.16.927-.381 1.775-.656 2.508-.046.121-.093.24-.143.358a7.03 7.03 0 0 0 3.149-2.866h-2.35Zm3.125-2h-2.89a22.163 22.163 0 0 0 0-3h2.89a7.026 7.026 0 0 1 0 3Zm-3.924-7.866A7.03 7.03 0 0 1 18.064 8.5h-2.35a13.925 13.925 0 0 0-.656-2.508 9.56 9.56 0 0 0-.143-.358Z"></path>
                                    </svg>
                                </div>
                                <p>RUB</p>
                            </button> */}
                            {/* <ReactCountryDropdown defaultCountry='RU' onSelect={(e)=> {console.log(e)}}/> 

                            TODO Сделать компонент select для выбора валюты оплаты
                            
                            */}
                                
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
