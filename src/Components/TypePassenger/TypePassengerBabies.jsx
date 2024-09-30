/* eslint-disable react/prop-types */
import React from 'react'
import './TypePassenger.css'
import PassengerCounter from '../PassengerCounter/PassengerCounter'

export default function TypePassengerBabies({ageGroup, ageGroupParams, defaultPassengerAmount}) {
  return (
    <>
        <div className='type_passengers-wrapper'>
        <div className='passenger_age-group'>
            <div className='age-group-inner--wrapper'>
              {
                // Для того, чтобы на элемент с "Младенцами" навесить класс для внутр. отступа
              ageGroup == "Младенцы" ? 
                <>
                  <span className='age_group babies'>{ageGroup}</span>
                  <span className='age_group_params'>{ageGroupParams}</span>  
                </>
              : 
                <>
                  <span className='age_group'>{ageGroup}</span>
                  <span className='age_group_params'>{ageGroupParams}</span>
                </>
              }
            </div>
        </div>
        <div className='wrapper_count-passenger'>
            <PassengerCounter 
            defaultValue={defaultPassengerAmount}
            />
        </div>
    </div>
    </>
  )
}
