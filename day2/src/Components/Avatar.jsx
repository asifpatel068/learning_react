import React from 'react'

export default function Avatar(props) {

    const {src,name,rounded}=props

    const styles={
        borderRadius: rounded ? "50%" :"16px",
    }

  return (
    <div>
        <img 
        src={src} 
        alt="avatar"
        width={"200px"}
        style={styles}
        />
         <h4>{name}</h4>
    </div>
  )
}
