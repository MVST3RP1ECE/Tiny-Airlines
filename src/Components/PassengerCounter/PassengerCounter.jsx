/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import SvgMinus from '../SVG/SvgMinus'
import SvgPlus from '../SVG/SvgPlus'
import './PassengerCounter.css'

export default function PassengerCounter({defaultValue, passengerControlAdults, passengerControlKids, passengerControlBabies}) {

  const [countPassenger, setCountPassenger] = useState(defaultValue);

  // console.log(passengerControlAdults, passengerControlKids, passengerControlBabies);
  console.log(countPassenger);

  function handleDecrement(){
    if (countPassenger == 0) {
      return 0;
    }
    setCountPassenger(prev => prev - 1)
  }

  function handleIncrement(){
    if (countPassenger >= 9) {
      return 0
    }
    setCountPassenger(prev => prev + 1)
  }
  
  return (
    <>
        <div className='counter_inner_wrapper'>
            <div className='counter_decrement'>
              <button className='btn_decrement' onClick={handleDecrement}>
                <SvgMinus/>
              </button>
            </div>

            <div className='counter_number'>{countPassenger}</div>

            <div className='counter_increment'>
              <button className='btn_increment' onClick={handleIncrement}>
                <SvgPlus/>
              </button>
            </div>
        </div>
    </>
  )
}
