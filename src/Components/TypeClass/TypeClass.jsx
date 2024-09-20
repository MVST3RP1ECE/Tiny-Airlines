/* eslint-disable react/prop-types */
import React from 'react'
import './TypeClass.css'

export default function TypeClass({classType, classValue, elementName, defaultValue}) {

  let handleInputChange = (e) =>{
    console.log(e.target.value);   
  }


  return (
    <div className='type_class_wrapper-elements'>
      <label htmlFor={classType} className='label_is_wrapper'>
        <span className='class_value'>{classValue}</span>
        <input className='radio__input' type="radio" value={classValue} name={elementName} id={classType} 
        defaultChecked={defaultValue}
        onChange={handleInputChange}/>
        <span className='rad_btn'></span>
      </label>
    </div>
  )
}
