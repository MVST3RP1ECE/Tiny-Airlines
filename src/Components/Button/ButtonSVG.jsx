/* eslint-disable react/prop-types */
import React from 'react'

export default function Button({icon, text}) {

  function nameLog(){
    console.log(text);
  }

  if(text == "Профиль"){
    return(
      <button className='button_profile' onClick={nameLog}>
        <div className='svg_wrapper'>
            {icon}
        </div>
        <p className='plain_text montserrat-alternates-regular '>
            {text}
        </p>
     </button>
    )
  }
  else if( text == "Поддержка"){
    return (
      <button className='button_support' onClick={nameLog}>
          <div className='svg_wrapper'>
              {icon}
          </div>
          <p className='plain_text montserrat-alternates-regular '>
              {text}
          </p>
       </button>
    )
  }
  return (
    <button className='button_cur' onClick={nameLog}>
        <div className='svg_wrapper'>
            {icon}
        </div>
        <p className='plain_text montserrat-alternates-regular '>
            {text}
        </p>
     </button>
  )
}