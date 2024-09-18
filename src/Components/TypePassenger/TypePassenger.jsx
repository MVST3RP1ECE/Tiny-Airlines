/* eslint-disable react/prop-types */
import React from 'react'
import './TypePassenger.css'
import PassengerCounter from '../PassengerCounter/PassengerCounter'


export default function TypePassenger({ageGroup, ageGroupParams}) {
  return (
    <div className='type_passengers-wrapper'>
        <div className='passenger_age-group'>
            <div className='age-group-inner--wrapper'>
                <span>{ageGroup}</span>
                <span>{ageGroupParams}</span>
            </div>
        </div>
        <div className='wrapper_count-passenger'>
            {/*  TODO Сделать формы управления кол-вом пассажиров категории (добавить/убавить) + вывод в <div>*/}
            <PassengerCounter/>
        </div>
    </div>
  )
}
