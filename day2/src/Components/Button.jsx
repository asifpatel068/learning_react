import React from 'react'

export default function Button(props){
    const {text,handleButtonClick}=props
    return <button onClick={handleButtonClick}>{text}</button>
  }