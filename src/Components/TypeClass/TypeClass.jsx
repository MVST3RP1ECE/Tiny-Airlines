/* eslint-disable react/prop-types */
import React from 'react'
import './TypeClass.css'

export default function TypeClass({classType, classValue, elementName, reff, defaultValue, handleInputChangeClass}) {

  // let handleInputChangeClass = (e) =>{
  //   console.log(e.target.value);
  // }

  // console.log(reff.current);
  // defaultValue = reff;
  // console.log(defaultValue);
  
  

  return (
    <div className='type_class_wrapper-elements'>
      <label htmlFor={classType} className='label_is_wrapper'>
        <span className='class_value'>{classValue}</span>

        <input className='radio__input' type='radio'
        value={classValue} 
        name={elementName} 
        id={classType} 
        // TODO Разобраться с checked и defaultChecked, мб тут решение проблемы.
        // defaultChecked={reff.current}
        // checked={reff.current}
        onChange={handleInputChangeClass}/>
        
        <span className='rad_btn'></span>
      </label>
    </div>
  )
}
