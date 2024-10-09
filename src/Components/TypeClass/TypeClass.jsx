/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState, memo } from 'react'
import './TypeClass.css'

function TypeClass({classType, classValue, elementName, handleInputChangeClass, defaultChecked}) {

  const [isActive, setIsActive] = useState(false);
  return (
    <div onClick={() => setIsActive(!isActive)} className='type_class_wrapper-elements'>
      <label htmlFor={classType} className='label_is_wrapper'>
        <span className='class_value'>{classValue}</span>
        <input className='radio__input'
        type='radio'
        value={classValue}
        name={elementName} 
        id={classType} 
        defaultChecked={defaultChecked}
        onChange={handleInputChangeClass}/>
        <span className='rad_btn'></span>
      </label>
    </div>
  )
}

export default memo(TypeClass)
