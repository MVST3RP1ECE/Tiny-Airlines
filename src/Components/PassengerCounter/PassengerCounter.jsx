/* eslint-disable react/prop-types */
import React from 'react'
import SvgMinus from '../SVG/SvgMinus'
import SvgPlus from '../SVG/SvgPlus'
import './PassengerCounter.css'

export default function PassengerCounter({defaultValue}) {
  return (
    <>
        <div className='counter_inner_wrapper'>
            <div className='counter_decrement'>
              <button className='btn_decrement'>
                <SvgMinus/>
              </button>
            </div>

            <div className='counter_number'>{defaultValue}</div>

            <div className='counter_increment'>
              <button className='btn_increment'>
                <SvgPlus/>
              </button>
            </div>

        </div>
    </>
  )
}
